package com.example.pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.pharmacy.entity.Medicine;
import com.example.pharmacy.service.MedicineService;

@RestController
@RequestMapping("/api/medicines")
@CrossOrigin(origins = "*")
public class MedicineController {

    @Autowired
    private MedicineService service;

    // GET all medicines
    @GetMapping
    public List<Medicine> getAll(){
        return service.getAll();
    }

    // GET medicine by id
    @GetMapping("/{id}")
    public Medicine getById(@PathVariable Long id){
        return service.getById(id);
    }

    // ADD medicine (Admin)
    @PostMapping
    public Medicine addMedicine(@RequestBody Medicine medicine){
        return service.save(medicine);
    }
}