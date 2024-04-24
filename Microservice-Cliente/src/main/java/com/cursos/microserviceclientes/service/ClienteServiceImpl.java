package com.cursos.microserviceclientes.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cursos.microserviceclientes.entity.Cliente;
import com.cursos.microserviceclientes.exception.ResourceNotFoundException;
import com.cursos.microserviceclientes.repository.ClienteRepository;

@Service
public class ClienteServiceImpl implements ClienteService {

    private final ClienteRepository clienteRepository;

    public ClienteServiceImpl(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Override
    public Cliente save(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    @Override
    public Cliente findById(Integer id) {
        Cliente cliente = clienteRepository.findById(id).orElseThrow(
            () ->{
                throw new ResourceNotFoundException("Cliente con id " + id + " no se encuentra");
            }
        );
        return cliente;
    }

    @Override
    public void deleteById(Integer id) {
        clienteRepository.deleteById(id);
    }

    @Override
    public Cliente update( Cliente cliente) {
        return clienteRepository.save(cliente);
    }

}
