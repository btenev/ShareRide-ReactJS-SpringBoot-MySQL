package com.bgtenev.backend.model.dto;

import com.bgtenev.backend.model.dto.ride.CarDto;
import com.bgtenev.backend.model.dto.user.DriverDto;
import com.bgtenev.backend.model.dto.user.UserDetailsDto;
import com.bgtenev.backend.model.enums.BaggageEnum;
import com.bgtenev.backend.model.enums.SeatEnum;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class RideSummaryDto {
    private Long id;

    private String departure;

    private String arrival;

    private LocalDate departureDate;

    private LocalTime departureTime;

    private SeatEnum numberOfSeats;

    private BigDecimal price;

    private DriverDto driver;

    public RideSummaryDto() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDeparture() {
        return departure;
    }

    public void setDeparture(String departure) {
        this.departure = departure;
    }

    public String getArrival() {
        return arrival;
    }

    public void setArrival(String arrival) {
        this.arrival = arrival;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalTime getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(LocalTime departureTime) {
        this.departureTime = departureTime;
    }

    public SeatEnum getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(SeatEnum numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public DriverDto getDriver() {
        return driver;
    }

    public void setDriver(DriverDto driver) {
        this.driver = driver;
    }
}
