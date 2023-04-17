package com.bgtenev.backend.model.entity;

import com.bgtenev.backend.model.enums.BaggageEnum;
import com.bgtenev.backend.model.enums.SeatEnum;
import jakarta.persistence.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "rides")
public class RideEntity extends BaseEntity{
    @Column(nullable = false)
    private String departure;

    @Column(nullable = false)
    private String arrival;

    @Column(name = "departure_date", nullable = false)
    private LocalDate departureDate;

    @Column(name = "departure_time", nullable = false)
    private LocalTime departureTime;

    @Column(name = "number_of_seats", nullable = false)
    @Enumerated(EnumType.STRING)
    private SeatEnum numberOfSeats;

    @Column(name = "baggage_quantity", nullable = false)
    @Enumerated(EnumType.STRING)
    private BaggageEnum baggageQuantity;


    private BigDecimal price;

    @Column(name = "trip_information", columnDefinition = "TEXT")
    private String tripInformation;

    private boolean active;

    private boolean archived;

    @ManyToOne
    private UserEntity driver;

    @OneToMany
    private List<UserEntity> passengers = new ArrayList<>();

    @ManyToMany(cascade=CascadeType.ALL)
    private List<RidesStatusEntity> requests = new ArrayList<>();
    @ManyToOne(cascade = CascadeType.ALL)
    private CarEntity car;

    public RideEntity() {
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

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public boolean isArchived() {
        return archived;
    }

    public void setArchived(boolean archived) {
        this.archived = archived;
    }

    public UserEntity getDriver() {
        return driver;
    }

    public void setDriver(UserEntity driver) {
        this.driver = driver;
    }

    public List<UserEntity> getPassengers() {
        return passengers;
    }

    public void setPassengers(List<UserEntity> passengers) {
        this.passengers = passengers;
    }

    public List<RidesStatusEntity> getRequests() {
        return requests;
    }

    public void setRequests(List<RidesStatusEntity> requests) {
        this.requests = requests;
    }

    public CarEntity getCar() {
        return car;
    }

    public void setCar(CarEntity car) {
        this.car = car;
    }
}
