package com.bgtenev.backend.model.dto;

import com.bgtenev.backend.model.dto.ride.CarDto;
import com.bgtenev.backend.model.dto.user.UserDetailsDto;
import com.bgtenev.backend.model.enums.BaggageEnum;
import com.bgtenev.backend.model.enums.SeatEnum;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public class RideDetailsDto {
    private Long id;

    private String departure;

    private String arrival;

    private LocalDate departureDate;

    private LocalTime departureTime;

    private SeatEnum numberOfSeats;

    private BaggageEnum baggageQuantity;

    private BigDecimal price;

    private String tripInformation;

    private CarDto car;

    private UserDetailsDto driver;

    private List<UserDetailsDto> passengers;
    public RideDetailsDto() {

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

    public BaggageEnum getBaggageQuantity() {
        return baggageQuantity;
    }

    public void setBaggageQuantity(BaggageEnum baggageQuantity) {
        this.baggageQuantity = baggageQuantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getTripInformation() {
        return tripInformation;
    }

    public void setTripInformation(String tripInformation) {
        this.tripInformation = tripInformation;
    }

    public CarDto getCar() {
        return car;
    }

    public void setCar(CarDto car) {
        this.car = car;
    }

    public UserDetailsDto getDriver() {
        return driver;
    }

    public void setDriver(UserDetailsDto driver) {
        this.driver = driver;
    }

    public List<UserDetailsDto> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<UserDetailsDto> passengers) {
        this.passengers = passengers;
    }
}
