package com.bgtenev.backend.repository;

import com.bgtenev.backend.model.entity.RidesStatusEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RideStatusRepository extends JpaRepository<RidesStatusEntity, Long> {
}
