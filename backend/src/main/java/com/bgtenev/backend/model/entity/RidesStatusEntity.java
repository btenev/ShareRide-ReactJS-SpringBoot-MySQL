package com.bgtenev.backend.model.entity;

import com.bgtenev.backend.model.enums.RequestEnum;
import jakarta.persistence.*;

@Entity
@Table(name = "rides_status")
public class RidesStatusEntity extends BaseEntity {
    @Column(nullable = false)
    private Long passengerId;

    private boolean joinRide;

    private boolean approveRide;

    @Enumerated(EnumType.STRING)
    private RequestEnum reason;

    public RidesStatusEntity() {
    }

    public Long getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(Long passengerId) {
        this.passengerId = passengerId;
    }

    public boolean isJoinRide() {
        return joinRide;
    }

    public void setJoinRide(boolean joinRide) {
        this.joinRide = joinRide;
    }

    public boolean isApproveRide() {
        return approveRide;
    }

    public void setApproveRide(boolean approveRide) {
        this.approveRide = approveRide;
    }

    public RequestEnum getReason() {
        return reason;
    }

    public void setReason(RequestEnum reason) {
        this.reason = reason;
    }
}
