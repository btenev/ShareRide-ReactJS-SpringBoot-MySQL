package com.bgtenev.backend.model.enums;

public enum CommunicationEnum {
    NONE(""),
    HIGH("I'm chatter box"),
    MEDIUM("I'm chatty when i feel comfortable"),
    LOW("I'm the quiet type");

    private final String message;
    CommunicationEnum(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
