package com.bgtenev.backend.model.entity;

import com.bgtenev.backend.model.enums.*;
import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
public class UserEntity extends BaseEntity{
    @Column(nullable = false)
    private String email;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false)
    private LocalDate birthdate;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private GenderEnum gender;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String phoneNumber;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private LanguageEnum language;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private CommunicationEnum communication;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private MusicEnum music;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PetEnum pet;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private SmokingEnum smoking;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private AddressEntity address;

    @ManyToMany(fetch = FetchType.EAGER)
    private List<RoleEntity> roles = new ArrayList<>();

    public UserEntity() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
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

    public LocalDate getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(LocalDate birthdate) {
        this.birthdate = birthdate;
    }

    public GenderEnum getGender() {
        return gender;
    }

    public void setGender(GenderEnum gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public LanguageEnum getLanguage() {
        return language;
    }

    public void setLanguage(LanguageEnum language) {
        this.language = language;
    }

    public CommunicationEnum getCommunication() {
        return communication;
    }

    public void setCommunication(CommunicationEnum communication) {
        this.communication = communication;
    }

    public MusicEnum getMusic() {
        return music;
    }

    public void setMusic(MusicEnum music) {
        this.music = music;
    }

    public PetEnum getPet() {
        return pet;
    }

    public void setPet(PetEnum pet) {
        this.pet = pet;
    }

    public SmokingEnum getSmoking() {
        return smoking;
    }

    public void setSmoking(SmokingEnum smoking) {
        this.smoking = smoking;
    }

    public AddressEntity getAddress() {
        return address;
    }

    public void setAddress(AddressEntity address) {
        this.address = address;
    }

    public List<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(List<RoleEntity> roles) {
        this.roles = roles;
    }
}
