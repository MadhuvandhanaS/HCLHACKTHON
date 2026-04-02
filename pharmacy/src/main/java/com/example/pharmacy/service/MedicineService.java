package com.example.pharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import com.example.pharmacy.entity.Medicine;
import com.example.pharmacy.repository.MedicineRepository;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository repo;

    // Get all medicines
    public List<Medicine> getAll(){
        return repo.findAll();
    }

    // Save medicine (admin)
    public Medicine save(Medicine medicine){
        return repo.save(medicine);
    }

    // Get single medicine
    public Medicine getById(Long id){
        return repo.findById(id).orElse(null);
    }
}