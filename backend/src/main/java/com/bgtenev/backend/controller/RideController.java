package com.bgtenev.backend.controller;

import com.bgtenev.backend.model.dto.RideDetailsDto;
import com.bgtenev.backend.model.dto.ride.PublishRideDto;
import com.bgtenev.backend.model.dto.ride.PublishedRideDto;
import com.bgtenev.backend.model.dto.ride.SearchRideDto;
import com.bgtenev.backend.service.RideService;
import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/rides")
public class RideController {
    private final RideService rideService;

    public RideController(RideService rideService) {
        this.rideService = rideService;
    }

    @PostMapping("/publish")
    public ResponseEntity<PublishedRideDto> publishRideConfirm(
            @Valid @RequestBody PublishRideDto publishRideDto,
            Principal principal
    ) {
        PublishedRideDto newRide = this.rideService.saveRide(publishRideDto, principal);

        return ResponseEntity.created(URI.create("/rides/publish" + newRide.getId())).body(newRide);
    }

    @GetMapping("/search")
    @Transactional
    public ResponseEntity<List<RideDetailsDto>> searchQuery(@RequestBody SearchRideDto searchRideDto) {
        List<RideDetailsDto> rides = rideService.searchRide(searchRideDto);

        return ResponseEntity.ok(rides);
    }
}
