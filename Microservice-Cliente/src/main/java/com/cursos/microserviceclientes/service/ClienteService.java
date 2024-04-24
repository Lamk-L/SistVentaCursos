package com.cursos.microserviceclientes.service;

import java.util.List;


import com.cursos.microserviceclientes.entity.Cliente;

public interface ClienteService {
    Cliente save(Cliente cliente);
    List<Cliente> findAll();
    Cliente findById(Integer id);
    void deleteById(Integer id);
    Cliente update( Cliente cliente);
}
