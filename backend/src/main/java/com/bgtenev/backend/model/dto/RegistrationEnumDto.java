package com.bgtenev.backend.model.dto;

import com.bgtenev.backend.model.enums.*;

public class RegistrationEnumDto {
    private CommunicationEnum[] communication = CommunicationEnum.values();
    private GenderEnum[] gender = GenderEnum.values();
    private LanguageEnum[] language = LanguageEnum.values();
    private MusicEnum[] music = MusicEnum.values();
    private PetEnum[] pet = PetEnum.values();
    private SmokingEnum[] smoking = SmokingEnum.values();

    public CommunicationEnum[] getCommunication() {
        return communication;
    }

    public GenderEnum[] getGender() {
        return gender;
    }

    public LanguageEnum[] getLanguage() {
        return language;
    }

    public MusicEnum[] getMusic() {
        return music;
    }

    public PetEnum[] getPet() {
        return pet;
    }

    public SmokingEnum[] getSmoking() {
        return smoking;
    }
}
//TODO: send the enums as key(enum) - value(message)   https://www.baeldung.com/java-enum-values#multiple-values