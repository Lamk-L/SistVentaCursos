package com.cursos.microserviceclientes.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.cursos.microserviceclientes.entity.Cliente;
import com.cursos.microserviceclientes.service.ClienteService;

@RestController
// http://localhost:8080/api/clientes
@RequestMapping("/api/clientes")
@CrossOrigin(origins = "http://localhost:4200")
public class ClienteController {

    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    // localhost:8080/api/clientes/create
    @PostMapping("/create")
    public Cliente save(@RequestBody Cliente cliente) {
        return clienteService.save(cliente);
    }

    // localhost:8080/api/clientes
    @GetMapping()
    public List<Cliente> findAll() {
        return clienteService.findAll();
    }

    // localhost:8080/api/clientes/1
    @GetMapping("/{id}")
    public Cliente findById(@PathVariable() Integer id) {
        return clienteService.findById(id);
    }

    // localhost:8080/api/clientes/1
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable() Integer id) {
        clienteService.deleteById(id);
    }

    // localhost:8080/api/clientes
    @PutMapping
    public Cliente upaCliente(@RequestBody Cliente cliente) {
        Cliente clienteDb = clienteService.findById(cliente.getId());
        clienteDb.setNombre(cliente.getNombre());
        clienteDb.setApellido(cliente.getApellido());
        clienteDb.setEmail(cliente.getEmail());
        return clienteService.update(clienteDb);
    }

}
