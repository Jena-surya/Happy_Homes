package com.happyhomes.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "pricing")
public class Pricing {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category;
    private String service;
    private String material;

//    private double pricePerSqft;

    @Column(nullable = false)
    private double pricePerSqft = 100;
    private double multiplier;     // optional

//    private double gst;
@Column(nullable = false)
private double gst = 18;
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getService() {
        return service;
    }

    public void setService(String service) {
        this.service = service;
    }

    public String getMaterial() {
        return material;
    }

    public void setMaterial(String material) {
        this.material = material;
    }

    public double getPricePerSqft() {
        return pricePerSqft;
    }

    public void setPricePerSqft(double pricePerSqft) {
        this.pricePerSqft = pricePerSqft;
    }

    public double getMultiplier() {
        return multiplier;
    }

    public void setMultiplier(double multiplier) {
        this.multiplier = multiplier;
    }

    public double getGst() {
        return gst;
    }

    public void setGst(double gst) {
        this.gst = gst;
    }
}