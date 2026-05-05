package com.happyhomes.Service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.happyhomes.Repository.GalleryRepository;
import com.happyhomes.entity.GalleryImage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Map;

@Service
public class GalleryService {

    @Autowired
    private Cloudinary cloudinary;

    @Autowired
    private GalleryRepository repo;

    public GalleryImage upload(String category, MultipartFile file) {
        try {
            Map uploadResult = cloudinary.uploader().upload(file.getBytes(), ObjectUtils.emptyMap());

            String url = uploadResult.get("secure_url").toString();

            GalleryImage img = new GalleryImage();
            img.setCategory(category);
            img.setImageUrl(url);
            img.setPublicId(uploadResult.get("public_id").toString());

            return repo.save(img);

        } catch (Exception e) {
            throw new RuntimeException("Upload failed");
        }
    }

    public List<GalleryImage> getByCategory(String category) {
        return repo.findByCategory(category);
    }
}