package com.happyhomes.controller;

import com.happyhomes.Repository.AdminRepository;
import com.happyhomes.dto.LoginRequest;
import com.happyhomes.entity.Admin;
import com.happyhomes.config.JwtUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminRepository adminRepository;

    @Autowired
    private JwtUtil jwtUtil;   // 🔥 FIX: add this

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody LoginRequest request) {

        Admin admin = adminRepository.findByEmail(request.getEmail()).orElse(null);

        Map<String, Object> response = new HashMap<>();

        if (admin != null && admin.getPassword().equals(request.getPassword())) {

            String token = jwtUtil.generateToken(admin.getEmail());

            response.put("status", "success");
            response.put("token", token);

        } else {
            response.put("status", "fail");
        }

        return response;
    }

    @GetMapping("/dashboard")
    public String dashboard() {
        return "Welcome Admin Dashboard ✅";
    }
}