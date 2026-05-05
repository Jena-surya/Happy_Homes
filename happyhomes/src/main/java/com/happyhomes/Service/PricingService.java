package com.happyhomes.Service;

import com.happyhomes.Repository.PricingRepository;
import com.happyhomes.entity.Pricing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PricingService {

    @Autowired
    private PricingRepository repo;

    // ✅ SAVE (INSERT + UPDATE)
    public Pricing save(Pricing pricing) {

        Optional<Pricing> existing = repo
                .findByCategoryIgnoreCaseAndServiceIgnoreCaseAndMaterialIgnoreCase(
                        pricing.getCategory().trim(),
                        pricing.getService().trim(),
                        pricing.getMaterial().trim()
                );

        if (existing.isPresent()) {
            Pricing p = existing.get();

            p.setPricePerSqft(pricing.getPricePerSqft());
            p.setMultiplier(pricing.getMultiplier());
            p.setGst(pricing.getGst());

            return repo.save(p);
        }

        return repo.save(pricing);
    }

    public List<Pricing> getAll() {
        return repo.findAll();
    }

    // ✅ FETCH PRICE FIX
    public Pricing getPrice(String category, String service, String material) {

        return repo
                .findByCategoryIgnoreCaseAndServiceIgnoreCaseAndMaterialIgnoreCase(
                        category.trim(),
                        service.trim(),
                        material.trim()
                )
                .orElseThrow(() -> new RuntimeException("Pricing not found"));
    }
}