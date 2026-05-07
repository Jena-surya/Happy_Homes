package com.happyhomes.controller;

import com.happyhomes.Service.PricingService;
import com.happyhomes.entity.Pricing;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/pricing")
public class PricingController {

    @Autowired
    private PricingService pricingService; // 🔥 renamed

    // ADD
    @PostMapping("/add")
    public Pricing addPricing(@RequestBody Pricing pricing) {
        return pricingService.save(pricing);
    }

    // GET ALL
    @GetMapping("/all")
    public List<Pricing> getAll() {
        return pricingService.getAll();
    }
    @GetMapping("/calculate")
    public Pricing getPrice(
            @RequestParam String category,
            @RequestParam String service,
            @RequestParam String material
    ) {
        return pricingService.getPrice(category, service, material);
    }
}
