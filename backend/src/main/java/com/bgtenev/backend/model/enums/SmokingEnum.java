package com.bgtenev.backend.model.enums;

public enum SmokingEnum {
    SMOKER("I'm fine with smoking"),
    NONSMOKER("Please, no smoking in the car");
    private final String message;
    SmokingEnum(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
