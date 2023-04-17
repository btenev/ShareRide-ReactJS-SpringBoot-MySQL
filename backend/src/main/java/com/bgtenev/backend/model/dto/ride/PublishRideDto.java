package com.bgtenev.backend.model.dto.ride;

import com.bgtenev.backend.model.dto.ride.CarDto;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Future;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.springframework.format.annotation.DateTimeFormat;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;

public class PublishRideDto {
    @NotBlank(message = "Please, enter your origin location!")
    private String departure;

    @NotBlank(message = "Please, enter your destination location!")
    private String arrival;

    @NotNull(message = "Please, enter your departure date!")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Future(message = "Date should be in the future!")
    private LocalDate departureDate;

    @NotNull(message = "Please, enter your departure time!")
    @DateTimeFormat(pattern = "HH:mm")
    private LocalTime departureTime;

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select the number of available car seats!")
    private String numberOfSeats;
    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select the size of the allowed luggage!")
    private String baggageQuantity;

    private BigDecimal price;

    private String tripInformation;

    @Valid
    private CarDto car;

    public PublishRideDto() {
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

    public String getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(String numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }

    public String getBaggageQuantity() {
        return baggageQuantity;
    }

    public void setBaggageQuantity(String baggageQuantity) {
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
}
