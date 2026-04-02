package com.example.pharmacy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.pharmacy.repository.UserRepository;
import com.example.pharmacy.entity.User;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    // Register user
    public User register(User user){
        return repo.save(user);
    }

    // Login user
    public User login(String email, String password){
        User user = repo.findByEmail(email);

        if(user != null && user.getPassword().equals(password)){
            return user;
        }
        return null;
    }
}