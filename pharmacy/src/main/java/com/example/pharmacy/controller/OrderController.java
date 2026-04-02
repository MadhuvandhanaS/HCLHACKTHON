package com.example.pharmacy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import com.example.pharmacy.entity.Orders;
import com.example.pharmacy.service.OrderService;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "*")
public class OrderController {

    @Autowired
    private OrderService service;

    // place order
    @PostMapping
    public Orders placeOrder(@RequestBody Orders order){
        return service.placeOrder(order);
    }

    // get all orders (admin)
    @GetMapping
    public List<Orders> getAll(){
        return service.getAllOrders();
    }
}