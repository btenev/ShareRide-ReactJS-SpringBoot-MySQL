package com.bgtenev.backend.model.dto.user;

public class DriverDto {
    private String firstName;
    private String lastName;

    public DriverDto() {
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
}
