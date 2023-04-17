package com.bgtenev.backend.model.enums;

public enum PetEnum {
    NONE(""),
    YES("I love pets, Woof"),
    NO("Sorry, not a pet person");
    private final String message    ;

    PetEnum(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
