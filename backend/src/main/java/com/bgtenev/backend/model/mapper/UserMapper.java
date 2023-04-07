package com.bgtenev.backend.model.mapper;

import com.bgtenev.backend.model.dto.UserDto;
import com.bgtenev.backend.model.dto.UserRegisterDto;
import com.bgtenev.backend.model.entity.UserEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto userEntityToUserDto(UserEntity userEntity);

    UserEntity userRegisterDtoToUserEntity(UserRegisterDto userRegisterDto);
}
