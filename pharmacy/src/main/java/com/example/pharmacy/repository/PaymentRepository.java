package com.example.pharmacy.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pharmacy.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Long> {}