package com.happyhomes.controller;

import com.happyhomes.Service.CareerService;
import com.happyhomes.entity.CareerApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/careers")
@CrossOrigin(origins = "http://localhost:5173")
public class CareerController {

    @Autowired
    private CareerService service;

    // 🔥 SAVE FORM
    @PostMapping("/apply")
    public CareerApplication apply(@RequestBody CareerApplication app) {
        return service.save(app);
    }

    // 🔥 ADMIN FETCH
    @GetMapping("/all")
    public List<CareerApplication> getAll() {
        return service.getAll();
    }

    // 🔥 DELETE APPLICATION
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted Successfully";
    }
}

