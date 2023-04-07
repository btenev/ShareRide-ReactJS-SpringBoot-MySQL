package com.bgtenev.backend.model.dto;

import jakarta.validation.constraints.NotBlank;

public class AddressDto {
    @NotBlank(message = "Please, enter your country!")
    private String country;

    @NotBlank(message = "Please, enter your city!")
    private String city;

    @NotBlank(message = "Please, enter your postal code!")
    private String postalCode;

    @NotBlank(message = "Please, enter your street!")
    private String street;

    public AddressDto() {
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }
}
