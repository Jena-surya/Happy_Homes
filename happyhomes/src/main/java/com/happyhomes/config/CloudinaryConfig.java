package com.happyhomes.config;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class CloudinaryConfig {

    @Bean
    public Cloudinary cloudinary() {
        return new Cloudinary(ObjectUtils.asMap(
                "cloud_name", "dfc7ie2cd",
                "api_key", "822938386199899",
                "api_secret", "92z7uU6Zt3JpaVVj78wbiOwWjkY"
        ));
    }
}