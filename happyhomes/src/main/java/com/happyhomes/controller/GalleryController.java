package com.happyhomes.controller;

import com.cloudinary.utils.ObjectUtils;
import com.happyhomes.Repository.GalleryRepository;
import com.happyhomes.Service.GalleryService;
import com.happyhomes.entity.GalleryImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import com.cloudinary.Cloudinary;
@RestController
@RequestMapping("/api/gallery")
@CrossOrigin(origins = "http://localhost:5173")
public class GalleryController {

    @Autowired
    private GalleryService service;

    @Autowired
    private GalleryRepository repo;

    @Autowired
    private Cloudinary cloudinary;

    // 🔥 UPLOAD
    @PostMapping("/upload")
    public GalleryImage upload(
            @RequestParam String category,
            @RequestParam MultipartFile file
    ) {
        return service.upload(category, file);
    }

    // 🔥 GET BY CATEGORY
    @GetMapping("/{category}")
    public List<GalleryImage> getByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteImage(@PathVariable Long id) {
        try {
            GalleryImage img = repo.findById(id).orElseThrow();

            // 🔥 DELETE FROM CLOUDINARY
            cloudinary.uploader().destroy(img.getPublicId(), ObjectUtils.emptyMap());

            // 🔥 DELETE FROM DB
            repo.deleteById(id);

            return "Deleted Successfully";
        } catch (Exception e) {
            return "Delete Failed";
        }
    }

}