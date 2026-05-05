package com.happyhomes.controller;

import com.happyhomes.Service.ContactService;
import com.happyhomes.entity.ContactMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    @Autowired
    private ContactService service;

    // 🔥 USER FORM SUBMIT
    @PostMapping("/save")
    public ContactMessage save(@RequestBody ContactMessage msg) {
        return service.save(msg);
    }

    // 🔥 ADMIN FETCH
    @GetMapping("/all")
    public List<ContactMessage> getAll() {
        return service.getAll();
    }

    // 🔥 DELETE
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable Long id) {
        service.delete(id);
        return "Deleted";
    }
}
