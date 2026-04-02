package com.example.pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.pharmacy.entity.Payment;
import com.example.pharmacy.service.PaymentService;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(origins = "*")
public class PaymentController {

    @Autowired
    private PaymentService service;

    @PostMapping
    public Payment pay(@RequestBody Payment payment){
        return service.makePayment(payment);
    }
}