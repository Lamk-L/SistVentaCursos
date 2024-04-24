import { Component, OnInit } from '@angular/core';
import { CursoService } from '../../../service/curso.service';
import { Router } from '@angular/router';
import { MessageService } from '../../../service/message.service';
import { Curso } from '../../../model/curso';

@Component({
  selector: 'app-curso-add',
  templateUrl: './curso-add.component.html',
  styleUrl: './curso-add.component.css'
})
export class CursoAddComponent implements OnInit{

  id: number = 0;
  titulo: string = '';
  descripcion: string = '';
  precio: number = 0;
  duracion: number = 0;
  nivel: string = '';
  vacantes: number = 0;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private messageService: MessageService
  ){}

  ngOnInit(): void {
      
  }

  addCurso() {
    let curso = new Curso(this.id, this.titulo, this.descripcion, this.precio, this.duracion, this.nivel, this.vacantes);
    this.cursoService.createCurso(curso).subscribe(
      () => {
        this.router.navigate(['/cursos']);
        this.messageService.setMessage('La creación del curso fue un exito.');
      },
      error => {
        console.error('Error al crear un nuevo curso.', error);
      }
    );
  }
}
