
package com.happyhomes.Service;

import com.happyhomes.dto.LoginRequest;
import com.happyhomes.entity.Admin;
import com.happyhomes.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepository;

    public boolean login(LoginRequest request) {

        Admin admin = adminRepository.findByEmail(request.getEmail())
                .orElse(null);

        if (admin == null) return false;

        // simple password match (later bcrypt karenge)
        return admin.getPassword().equals(request.getPassword());
    }
}
