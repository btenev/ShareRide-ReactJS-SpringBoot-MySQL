package com.bgtenev.backend.repository;

import com.bgtenev.backend.model.dto.ride.SearchRideDto;
import com.bgtenev.backend.model.entity.RideEntity;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

public class RideSpecification implements Specification<RideEntity> {
    private final SearchRideDto searchRideDto;

    public RideSpecification(SearchRideDto searchRideDto) {
        this.searchRideDto = searchRideDto;
    }

    @Override
    public Predicate toPredicate(Root<RideEntity> root,
                                 CriteriaQuery<?> query,
                                 CriteriaBuilder cb) {

        Predicate p = cb.conjunction();
//        p.getExpressions().add(cb.and(cb.isTrue(root.get("active"))));

        if (searchRideDto.getDeparture() != null && !searchRideDto.getDeparture().isEmpty()) {
            p.getExpressions().add(
                    cb.and(cb.equal(root.get("departure"), searchRideDto.getDeparture() + ", Bulgaria"))
            );
        }

        if (searchRideDto.getArrival() != null && !searchRideDto.getArrival().isEmpty()) {
            p.getExpressions().add(
                    cb.and(cb.equal(root.get("arrival"), searchRideDto.getArrival() + ", Bulgaria"))
            );
        }

        if (searchRideDto.getDepartureDate() != null) {
            p.getExpressions().add(
                    cb.and(cb.equal(root.get("departureDate"), searchRideDto.getDepartureDate()))
            );
        }


        if (searchRideDto.getDepartureTime() != null) {
            p.getExpressions().add(
                    cb.and(cb.greaterThanOrEqualTo(root.get("departureTime"), searchRideDto.getDepartureTime()))
            );
        }

        return p;
    }
}
