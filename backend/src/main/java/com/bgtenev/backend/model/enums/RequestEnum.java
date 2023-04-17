package com.bgtenev.backend.model.enums;

public enum RequestEnum {
    YES("You have been approved"),
    NO("No fee seats");

    final String message;

    RequestEnum(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
