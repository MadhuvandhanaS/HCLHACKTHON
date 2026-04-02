package com.example.pharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pharmacy.entity.Prescription;
import com.example.pharmacy.repository.PrescriptionRepository;

@Service
public class PrescriptionService{

    @Autowired
    private PrescriptionRepository repo;

    public Prescription save(Prescription prescription){
        return repo.save(prescription);
    }
}