package com.bgtenev.backend.model.dto;

import com.bgtenev.backend.model.enums.BaggageEnum;
import com.bgtenev.backend.model.enums.SeatEnum;

public class CreationEnumDto {
    private BaggageEnum[] baggageQuantity = BaggageEnum.values();

    private SeatEnum[] numberOfSeats = SeatEnum.values();

    public BaggageEnum[] getBaggageQuantity() {
        return baggageQuantity;
    }

    public void setBaggageQuantity(BaggageEnum[] baggageQuantity) {
        this.baggageQuantity = baggageQuantity;
    }

    public SeatEnum[] getNumberOfSeats() {
        return numberOfSeats;
    }

    public void setNumberOfSeats(SeatEnum[] numberOfSeats) {
        this.numberOfSeats = numberOfSeats;
    }
}
