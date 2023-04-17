package com.bgtenev.backend.model.dto.ride;

import jakarta.validation.constraints.NotBlank;

public class CarDto {
    @NotBlank(message = "Please, enter the brand of the ride vehicle!")
    private String brand;
    @NotBlank(message = "Please, enter the model of the ride vehicle!")
    private String model;
    @NotBlank(message = "Please, enter the color of the ride vehicle!")
    private String color;
    @NotBlank(message = "Please, enter the license plate of the ride vehicle!")
    private String licensePlate;

    public CarDto() {
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getLicensePlate() {
        return licensePlate;
    }

    public void setLicensePlate(String licensePlate) {
        this.licensePlate = licensePlate;
    }
}
