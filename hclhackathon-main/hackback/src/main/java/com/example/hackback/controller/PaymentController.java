package com.example.hackback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.hackback.entity.Payment;
import com.example.hackback.repository.PaymentRepository;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin
public class PaymentController {

    @Autowired
    PaymentRepository repo;

    @PostMapping
    public Payment pay(@RequestBody Payment p){
        return repo.save(p);
    }
}