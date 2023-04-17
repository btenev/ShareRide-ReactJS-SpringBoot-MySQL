package com.bgtenev.backend.model.dto.user;

import com.bgtenev.backend.model.enums.*;

import java.time.LocalDate;

public class UserDetailsDto {
    private String email;

    private String firstName;

    private String lastName;

    private LocalDate birthdate;

    private GenderEnum gender;

    private String password;

    private LanguageEnum language;

    private String phoneNumber;

    private CommunicationEnum communication;

    private MusicEnum music;

    private PetEnum pet;

    private SmokingEnum smoking;

    private AddressDto address;

    public UserDetailsDto() {
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

    public LanguageEnum getLanguage() {
        return language;
    }

    public void setLanguage(LanguageEnum language) {
        this.language = language;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
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

    public AddressDto getAddress() {
        return address;
    }

    public void setAddress(AddressDto address) {
        this.address = address;
    }
}
