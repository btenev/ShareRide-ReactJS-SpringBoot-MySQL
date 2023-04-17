package com.bgtenev.backend.controller;

import com.bgtenev.backend.model.dto.CreationEnumDto;
import com.bgtenev.backend.model.dto.RegistrationEnumDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/utility")
public class UtilityController {

    @GetMapping("/register-enums")
    public ResponseEntity<RegistrationEnumDto> registrationEnums () {
        RegistrationEnumDto enums = new RegistrationEnumDto();
        return ResponseEntity.ok(enums);
    }

    @GetMapping("/creation-enums")
    public ResponseEntity<CreationEnumDto> creationEnums () {
        CreationEnumDto  enums = new CreationEnumDto();
        return ResponseEntity.ok(enums);
    }

}
