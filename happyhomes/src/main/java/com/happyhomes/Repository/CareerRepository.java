package com.happyhomes.Repository;

import com.happyhomes.entity.CareerApplication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CareerRepository extends JpaRepository<CareerApplication, Long> {
}