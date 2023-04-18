package com.bgtenev.backend.repository;

import com.bgtenev.backend.model.dto.ride.SearchRideDto;
import com.bgtenev.backend.model.entity.RideEntity;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;
import org.springframework.data.jpa.domain.Specification;

import java.time.LocalDate;
import java.time.LocalTime;

public class RideSpecification implements Specification<RideEntity> {
    private final SearchRideDto searchRideDto;

    public RideSpecification(SearchRideDto searchRideDto) {
        this.searchRideDto = searchRideDto;
    }

    @Override
    public Predicate toPredicate(Root<RideEntity> root,
                                 CriteriaQuery<?> query,
                                 CriteriaBuilder cb) {

        Specification<RideEntity> where = Specification.where(null);

        if (searchRideDto.getDeparture() != null && !searchRideDto.getDeparture().isEmpty()) {
            where = where.and(departureEqualsTo(searchRideDto.getDeparture()));
        }

        if (searchRideDto.getArrival() != null && !searchRideDto.getArrival().isEmpty()) {
            where = where.and(arrivalEqualsTo(searchRideDto.getArrival()));
        }

        if (searchRideDto.getDepartureDate() != null) {
            where = where.and(departureDateTo(searchRideDto.getDepartureDate()));
        }

        if (searchRideDto.getDepartureTime() != null) {
            where = where.and(departureTimeTo(searchRideDto.getDepartureTime()));
        }

        return where.toPredicate(root, query, cb);
    }

    private static Specification<RideEntity> departureEqualsTo(String departure) {
        return (r, q, b) -> b.and(b.equal(r.get("departure"), departure + ", Bulgaria"));
    }

    private static Specification<RideEntity> arrivalEqualsTo(String arrival) {
        return (r, q, b) -> b.and(b.equal(r.get("arrival"), arrival + ", Bulgaria"));
    }

    private static Specification<RideEntity> departureDateTo(LocalDate departureDate) {
        return (r, q, b) -> b.and(b.equal(r.get("departureDate"), departureDate));
    }

    private static Specification<RideEntity> departureTimeTo(LocalTime departureTime) {
        return (r, q, b) -> b.and(b.equal(r.get("departureTime"), departureTime));
    }
}
