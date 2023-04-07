package com.bgtenev.backend.model.dto;

import com.bgtenev.backend.model.enums.*;
import com.bgtenev.backend.model.validation.FieldMatch;
import com.bgtenev.backend.model.validation.UniqueUserEmail;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
@FieldMatch(
        first = "password",
        second = "confirmPassword",
        message = "Passwords do no match!"
)
public class UserRegisterDto {
    @NotBlank(message = "Please, enter your email!")
    @Email(message = "User email should be valid!")
    @UniqueUserEmail(message = "User email should be unique!")
    private String email;

    @NotBlank(message = "Please enter your first name!")
    @Size(min = 2, max = 30, message = "First name must be between 2 and 30 characters!")
    private String firstName;

    @NotBlank(message = "Please enter your last name!")
    @Size(min = 2, max = 30, message = "Last name must be between 2 and 30 characters!")
    private String lastName;

    @NotNull(message = "Please enter your birthdate!")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthdate;

    @NotNull(message = "Please, select your gender!")
    private GenderEnum gender;

    @NotBlank(message = "Password field cannot be empty!")
    @Size(min = 5, max = 20, message = "Password must be between 5 and 20 characters!")
    private String password;

    private String confirmPassword;

    @NotNull(message = "Please select your language!")
    private LanguageEnum language;

    @NotBlank(message = "Please, enter your phone number!")
    private String phoneNumber; //todo: better validation of phone number!
    @NotNull(message = "Please, select how talkative are you!")
    private CommunicationEnum communication;

    @NotNull(message = "Please, select do you listen music while driving!")
    private MusicEnum music;

    @NotNull(message = "Please, select do you like pets!")
    private PetEnum pet;

    @NotNull(message = "Please, select do you tolerate smoking!")
    private SmokingEnum smoking;

    @Valid
    private AddressDto address;

    public UserRegisterDto() {
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

    public String getConfirmPassword() {
        return confirmPassword;
    }

    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
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
