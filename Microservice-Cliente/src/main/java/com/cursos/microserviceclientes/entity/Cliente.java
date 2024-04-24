package com.cursos.microserviceclientes.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "clientes")
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // Por defecto, no se necesita especificar nullable = false para la clave primaria

    @Column(nullable = false, length = 30) // Asegura que el nombre no sea nulo
    private String nombre;

    @Column(nullable = false, length = 30) // Asegura que el apellido no sea nulo
    private String apellido;

    @Column(nullable = false, length = 40, unique = true) // Asegura que el email no sea nulo y sea único
    private String email;

    public Cliente() {
    }

    public Cliente(Integer id, String nombre, String apellido, String email) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
    
}
