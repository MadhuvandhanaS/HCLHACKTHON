package com.example.pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.pharmacy.entity.Prescription;
import com.example.pharmacy.service.PrescriptionService;

@RestController
@RequestMapping("/api/prescription")
@CrossOrigin(origins = "*")
public class PrescriptionController {

    @Autowired
    private PrescriptionService service;

    @PostMapping
    public Prescription save(@RequestBody Prescription prescription){
        return service.save(prescription);
    }
}