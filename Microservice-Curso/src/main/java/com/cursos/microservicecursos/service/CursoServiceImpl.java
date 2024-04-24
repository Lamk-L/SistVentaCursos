package com.cursos.microservicecursos.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cursos.microservicecursos.entity.Curso;
import com.cursos.microservicecursos.exception.ResourceNotFoundException;
import com.cursos.microservicecursos.repository.CursoRepository;

@Service
public class CursoServiceImpl implements CursoService {

    private final CursoRepository cursoRepository;

    public CursoServiceImpl(CursoRepository cursoRepository) {
        this.cursoRepository = cursoRepository;
    }

    @Override
    public Curso save(Curso curso) {
        return cursoRepository.save(curso);
    }

    @Override
    public List<Curso> findAll() {
        return cursoRepository.findAll();
    }

    @Override
    public Curso findById(Integer id) {
        Curso curso = cursoRepository.findById(id).orElseThrow(
            () ->{
                throw new ResourceNotFoundException("Curso con id " + id + " no se encuentra");
            }
        );
        return curso;
    }

    @Override
    public void deleteById(Integer id) {
        cursoRepository.deleteById(id);
    }

    @Override
    public Curso update(Curso curso) {
        return cursoRepository.save(curso);
    }
}
