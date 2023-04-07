package com.bgtenev.backend.model.enums;

public enum MusicEnum {
    YES("It's all about the playlist!"),
    NO("Silence is golden");
    private final String message;
    MusicEnum(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
