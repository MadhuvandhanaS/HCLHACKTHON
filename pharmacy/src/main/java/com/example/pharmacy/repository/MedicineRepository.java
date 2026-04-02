package com.example.pharmacy.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pharmacy.entity.Medicine;

public interface MedicineRepository extends JpaRepository<Medicine, Long> {}