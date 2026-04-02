package com.example.hackback.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

import com.example.hackback.entity.User;
import com.example.hackback.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    private UserService service;

    @PostMapping("/register")
    public User register(@Valid @RequestBody User user){
        User savedUser = service.register(user);
        return savedUser;
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return service.getAllUsers();
    }

    @PostMapping("/login")
    public User login(@RequestBody User user){
        return service.login(user.getEmail(), user.getPassword());
    }
}