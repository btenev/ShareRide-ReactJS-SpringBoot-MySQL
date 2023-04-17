package com.bgtenev.backend.repository;

import com.bgtenev.backend.model.entity.RideEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface RideRepository extends
        JpaRepository<RideEntity, Long>,
        JpaSpecificationExecutor<RideEntity> {
}
