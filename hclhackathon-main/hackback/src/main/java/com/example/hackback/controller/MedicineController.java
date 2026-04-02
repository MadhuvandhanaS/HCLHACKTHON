package com.example.hackback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import com.example.hackback.entity.Medicine;
import com.example.hackback.service.MedicineService;

@RestController
@RequestMapping("/api/medicine")
@CrossOrigin(origins = "*")
public class MedicineController {

    @Autowired
    private MedicineService service;

    @GetMapping
    public List<Medicine> getAll(){
        return service.getAll();
    }

    @PostMapping
    public Medicine save(@RequestBody Medicine medicine){
        return service.save(medicine);
    }
}