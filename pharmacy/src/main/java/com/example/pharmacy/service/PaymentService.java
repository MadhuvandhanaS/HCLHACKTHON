package com.example.pharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import com.example.pharmacy.entity.Payment;
import com.example.pharmacy.repository.PaymentRepository;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository repo;

    public Payment makePayment(Payment payment){
        payment.setPaymentDate(LocalDate.now());
        payment.setPaymentStatus("SUCCESS");
        return repo.save(payment);
    }
}