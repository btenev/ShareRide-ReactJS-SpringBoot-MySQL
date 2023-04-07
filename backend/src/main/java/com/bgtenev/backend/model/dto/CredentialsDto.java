package com.bgtenev.backend.model.dto;

public class CredentialsDto {
    private String email;
    private char[] password;

    public CredentialsDto() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public char[] getPassword() {
        return password;
    }

    public void setPassword(char[] password) {
        this.password = password;
    }
}
