package com.bgtenev.backend.model.mapper;

import com.bgtenev.backend.model.dto.user.UserDto;
import com.bgtenev.backend.model.dto.user.UserRegisterDto;
import com.bgtenev.backend.model.entity.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto userEntityToUserDto(UserEntity userEntity);

    @Mapping(target = "password", ignore = true)
    UserEntity userRegisterDtoToUserEntity(UserRegisterDto userRegisterDto);
}
