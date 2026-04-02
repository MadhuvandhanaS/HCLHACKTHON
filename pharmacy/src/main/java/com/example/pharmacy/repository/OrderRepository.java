package com.example.pharmacy.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pharmacy.entity.Orders;

public interface OrderRepository extends JpaRepository<Orders, Long> {}