package com.bgtenev.backend.service;

import com.bgtenev.backend.exception.AppException;
import com.bgtenev.backend.model.dto.RideSummaryDto;
import com.bgtenev.backend.model.dto.ride.PublishRideDto;
import com.bgtenev.backend.model.dto.ride.PublishedRideDto;
import com.bgtenev.backend.model.dto.ride.SearchRideDto;
import com.bgtenev.backend.model.entity.RideEntity;
import com.bgtenev.backend.model.entity.UserEntity;
import com.bgtenev.backend.model.mapper.RideMapper;
import com.bgtenev.backend.repository.RideRepository;
import com.bgtenev.backend.repository.RideSpecification;
import com.bgtenev.backend.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;
import java.util.Optional;

@Service
public class RideService {
    public final RideMapper rideMapper;
    private final UserRepository userRepository;
    private final RideRepository rideRepository;

    public RideService(RideMapper rideMapper, UserRepository userRepository, RideRepository rideRepository) {
        this.rideMapper = rideMapper;
        this.userRepository = userRepository;
        this.rideRepository = rideRepository;
    }

    public PublishedRideDto saveRide(PublishRideDto publishRideDto, Principal principal) {
        RideEntity newRide = this.rideMapper.publishRideDtoToRideEntity(publishRideDto);

        System.out.println(principal.toString());
        Optional<UserEntity> currentUser = this.userRepository.findByEmail(principal.getName());

        if (currentUser.isEmpty()) {
            throw new AppException("Unknown user", HttpStatus.NOT_FOUND);
        }

        newRide.setDriver(currentUser.get());
        this.rideRepository.save(newRide);

        return this.rideMapper.rideEntityToPublishedRideDto(newRide);
    }

    public List<RideSummaryDto> searchRide(SearchRideDto searchRideDto) {
        return this.rideRepository
                .findAll((new RideSpecification(searchRideDto)))
                .stream()
                .map(this.rideMapper::rideEntityToRideSummaryDto)
                .toList();
    }
}
