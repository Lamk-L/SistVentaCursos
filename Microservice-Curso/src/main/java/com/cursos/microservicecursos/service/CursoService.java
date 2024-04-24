package com.cursos.microservicecursos.service;

import java.util.List;

import com.cursos.microservicecursos.entity.Curso;

public interface CursoService {
    Curso save(Curso curso);
    List<Curso> findAll();
    Curso findById(Integer id);
    void deleteById(Integer id);
    Curso update(Curso curso);
}
