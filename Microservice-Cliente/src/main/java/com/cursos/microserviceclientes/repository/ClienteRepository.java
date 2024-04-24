package com.cursos.microserviceclientes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cursos.microserviceclientes.entity.Cliente;

@Repository
public interface ClienteRepository extends JpaRepository <Cliente, Integer> {
}
