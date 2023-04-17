package com.bgtenev.backend.model.mapper;

import com.bgtenev.backend.model.dto.RideDetailsDto;
import com.bgtenev.backend.model.dto.ride.PublishRideDto;
import com.bgtenev.backend.model.dto.ride.PublishedRideDto;
import com.bgtenev.backend.model.entity.RideEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RideMapper {

    @Mapping(target = "active", constant = "true")
    @Mapping(target = "archived", constant = "false")
    RideEntity publishRideDtoToRideEntity(PublishRideDto publishRideDto);

    PublishedRideDto rideEntityToPublishedRideDto(RideEntity rideEntity);

    RideDetailsDto rideEntityToRideDetailsDto(RideEntity ride);
}
