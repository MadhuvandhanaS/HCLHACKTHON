package com.example.hackback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hackback.entity.Prescription;
import com.example.hackback.repository.PrescriptionRepository;

@RestController
@RequestMapping("/api/prescription")
@CrossOrigin
public class PrescriptionController {

    @Autowired
    PrescriptionRepository repo;

    @PostMapping
    public Prescription save(@RequestBody Prescription p){
        return repo.save(p);
    }
}