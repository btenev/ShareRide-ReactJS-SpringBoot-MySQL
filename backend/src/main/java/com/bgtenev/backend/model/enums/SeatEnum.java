package com.bgtenev.backend.model.enums;

public enum SeatEnum {
    NONE(-1),
    Zero(0),
    One(1),
    Two(2),
    Three(3),
    Four(4),
    Five(5),
    Six(6),
    Seven(7),
    Eight(8);
    final int value;

    SeatEnum(int value) {
        this.value = value;
    }

    public int getValue() {
        return value;
    }

    public String newValue(int newValue) {
        String current = null;

        switch (newValue) {
            case 0:
                current = "Zero";
                break;
            case 1:
                current = "One";
                break;
            case 2:
                current = "Two";
                break;
            case 3:
                current = "Three";
                break;
            case 4:
                current = "Four";
                break;
            case 5:
                current = "Five";
                break;
            case 6:
                current = "Six";
                break;
            case 7:
                current = "Seven";
                break;
            case 8:
                current = "Eight";
                break;
        }
        return current;
    }
}
