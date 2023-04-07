package com.bgtenev.backend.repository;

import com.bgtenev.backend.model.entity.RoleEntity;
import com.bgtenev.backend.model.enums.RoleEnum;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity, Long> {
    RoleEntity findByUserRole(RoleEnum userRole);
}
