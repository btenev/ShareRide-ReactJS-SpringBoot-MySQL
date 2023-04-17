package com.bgtenev.backend.service;

import com.bgtenev.backend.model.dto.user.CredentialsDto;
import com.bgtenev.backend.exception.AppException;
import com.bgtenev.backend.model.dto.user.UserDto;
import com.bgtenev.backend.model.dto.user.UserRegisterDto;
import com.bgtenev.backend.model.entity.RoleEntity;
import com.bgtenev.backend.model.entity.UserEntity;
import com.bgtenev.backend.model.enums.RoleEnum;
import com.bgtenev.backend.model.mapper.UserMapper;
import com.bgtenev.backend.repository.RoleRepository;
import com.bgtenev.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, RoleRepository roleRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.userMapper = userMapper;
        this.passwordEncoder = passwordEncoder;
    }

    public UserDto findByEmail(String email) {
        UserEntity userEntity = userRepository.findByEmail(email)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        return userMapper.userEntityToUserDto(userEntity);
    }

    public UserDto login(CredentialsDto credentialsDto) {
        UserEntity userEntity = this.userRepository.findByEmail(credentialsDto.getEmail())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), userEntity.getPassword())) {
            return userMapper.userEntityToUserDto(userEntity);
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(UserRegisterDto userRegisterDto) {
        Optional<UserEntity> optionalUser  = this.userRepository.findByEmail(userRegisterDto.getEmail());

        if (optionalUser.isPresent()) {
            throw new AppException("User with this email already exist!", HttpStatus.BAD_REQUEST);
        }

        UserEntity newUser = this.userMapper.userRegisterDtoToUserEntity(userRegisterDto);
        newUser.setPassword(this.passwordEncoder.encode(CharBuffer.wrap(userRegisterDto.getPassword())));

        RoleEntity userRole = this.roleRepository.findByUserRole(RoleEnum.USER);
        newUser.setRoles(List.of(userRole));

        this.userRepository.save(newUser);

        return this.userMapper.userEntityToUserDto(newUser);
    }
}
