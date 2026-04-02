package com.example.pharmacy.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pharmacy.entity.Prescription;

public interface PrescriptionRepository extends JpaRepository<Prescription, Long> {}