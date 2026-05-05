package com.happyhomes.Repository;

import com.happyhomes.entity.Pricing;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PricingRepository extends JpaRepository<Pricing, Long> {

    // ✅ CASE INSENSITIVE FIX
    Optional<Pricing> findByCategoryIgnoreCaseAndServiceIgnoreCaseAndMaterialIgnoreCase(
            String category,
            String service,
            String material
    );
}