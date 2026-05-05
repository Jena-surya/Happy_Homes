package com.happyhomes.Repository;

import com.happyhomes.entity.GalleryImage;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GalleryRepository extends JpaRepository<GalleryImage, Long> {

    List<GalleryImage> findByCategory(String category);
}