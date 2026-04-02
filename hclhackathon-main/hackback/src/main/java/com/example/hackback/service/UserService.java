package com.example.hackback.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.hackback.repository.UserRepository;
import com.example.hackback.entity.User;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public User register(User user){
        if(repo.existsByEmail(user.getEmail())){
            throw new RuntimeException("Email already exists");
        }
        return repo.save(user);
    }
    public List<User> getAllUsers(){
        return repo.findAll();
    }

    public User login(String email, String password){

        User user = repo.findByEmail(email);

        if(user == null){
            throw new RuntimeException("User not found");
        }

        if(!user.getPassword().equals(password)){
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}