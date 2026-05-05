package com.happyhomes.Service;

import com.happyhomes.Repository.CareerRepository;
import com.happyhomes.entity.CareerApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CareerService {

    @Autowired
    private CareerRepository repo;

    public CareerApplication save(CareerApplication app) {
        return repo.save(app);
    }

    public List<CareerApplication> getAll() {
        return repo.findAll();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}