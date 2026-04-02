package com.example.pharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;
import com.example.pharmacy.entity.Orders;
import com.example.pharmacy.repository.OrderRepository;

@Service
public class OrderService {

    @Autowired
    private OrderRepository repo;

    public Orders placeOrder(Orders order){
        order.setOrderDate(LocalDate.now());
        order.setStatus("PLACED");
        return repo.save(order);
    }

    public List<Orders> getAllOrders(){
        return repo.findAll();
    }
}