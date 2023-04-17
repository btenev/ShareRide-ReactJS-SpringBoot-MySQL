package com.bgtenev.backend.model.dto.user;

import com.bgtenev.backend.model.dto.user.AddressDto;
import com.bgtenev.backend.model.validation.FieldMatch;
import com.bgtenev.backend.model.validation.UniqueUserEmail;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
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

    @Past(message = "Invalid birth date!")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;      //TODO: better birth date validation - empty string, longer date in the past

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select your gender!")
    private String gender;

    @NotBlank(message = "Password field cannot be empty!")
    @Size(min = 5, max = 20, message = "Password must be between 5 and 20 characters!")
    private String password;
    private String confirmPassword;

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please select your language!")
    private String language;

    @NotBlank(message = "Please, enter your phone number!")
    private String phoneNumber; //todo: better validation of phone number!

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select how talkative are you!")
    private String communication;

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select do you listen music while driving!")
    private String music;

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select do you like pets!")
    private String pet;

    @Pattern(regexp = "^((?!.*NONE.*).)*$", message = "Please, select do you tolerate smoking!")
    private String smoking;

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

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
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

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCommunication() {
        return communication;
    }

    public void setCommunication(String communication) {
        this.communication = communication;
    }

    public String getMusic() {
        return music;
    }

    public void setMusic(String music) {
        this.music = music;
    }

    public String getPet() {
        return pet;
    }

    public void setPet(String pet) {
        this.pet = pet;
    }

    public String getSmoking() {
        return smoking;
    }

    public void setSmoking(String smoking) {
        this.smoking = smoking;
    }

    public AddressDto getAddress() {
        return address;
    }

    public void setAddress(AddressDto address) {
        this.address = address;
    }
}
