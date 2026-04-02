package com.example.pharmacy.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Medicine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long medicineId;

    private String name;
    private String description;
    private double price;
    private int stock;
    private String dosageChild;
    private String dosageAdult;
    private String dosageSenior;
}