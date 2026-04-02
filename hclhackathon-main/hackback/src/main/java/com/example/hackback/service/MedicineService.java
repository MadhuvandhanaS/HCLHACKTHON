package com.example.hackback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import com.example.hackback.entity.Medicine;
import com.example.hackback.repository.MedicineRepository;

@Service
public class MedicineService {

    @Autowired
    private MedicineRepository repo;

    public List<Medicine> getAll(){
        return repo.findAll();
    }

    public Medicine save(Medicine medicine){
        return repo.save(medicine);
    }
}