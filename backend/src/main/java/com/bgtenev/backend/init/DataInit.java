package com.bgtenev.backend.init;

import com.bgtenev.backend.model.entity.RoleEntity;
import com.bgtenev.backend.model.enums.RoleEnum;
import com.bgtenev.backend.repository.RoleRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataInit implements CommandLineRunner {
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInit(RoleRepository roleRepository, PasswordEncoder passwordEncoder) {
        this.roleRepository = roleRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Override
    public void run(String... args) throws Exception {
        if(this.roleRepository.count() == 0) {

            Arrays.stream(RoleEnum.values())
                    .forEach(roleEnum -> {
                        RoleEntity newRole = new RoleEntity();

                        newRole.setUserRole(roleEnum);

                        this.roleRepository.save(newRole);
                    });
        }
        System.out.println(passwordEncoder.encode("topsecret"));
    }


}

