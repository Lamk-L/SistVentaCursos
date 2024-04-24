package com.cursos.microservicecursos.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;

import com.cursos.microservicecursos.entity.Curso;
import com.cursos.microservicecursos.service.CursoService;

@RestController
// http://localhost:8082/api/cursos
@RequestMapping("/api/cursos")
//@CrossOrigin(origins = "http://localhost:4200")
public class CursoController {

    private final CursoService cursoService;

    public CursoController(CursoService cursoService) {
        this.cursoService = cursoService;
    }

    // localhost:8082/api/cursos/create
    @PostMapping("/create")
    public Curso save(@RequestBody Curso curso) {
        return cursoService.save(curso);
    }

    // localhost:8082/api/cursos
    @GetMapping()
    public List<Curso> findAll() {
        return cursoService.findAll();
    }

    // localhost:8082/api/cursos/1
    @GetMapping("/{id}")
    public Curso findById(@PathVariable() Integer id) {
        return cursoService.findById(id);
    }

    // localhost:8082/api/cursos/1
    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable() Integer id) {
        cursoService.deleteById(id);
    }

    // localhost:8082/api/cursos
    @PutMapping
    public Curso upaCurso(@RequestBody Curso curso) {
        Curso cursoDb = cursoService.findById(curso.getId());
        return cursoService.update(cursoDb);
    }
}
