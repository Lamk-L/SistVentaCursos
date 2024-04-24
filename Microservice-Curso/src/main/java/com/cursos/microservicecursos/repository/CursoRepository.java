package com.cursos.microservicecursos.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cursos.microservicecursos.entity.Curso;

@Repository
public interface CursoRepository extends JpaRepository <Curso, Integer> {

}
