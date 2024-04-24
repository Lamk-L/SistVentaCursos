import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/curso';
import { CursoService } from '../../../service/curso.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrl: './curso-list.component.css'
})
export class CursoListComponent implements OnInit{
  cursos : Curso [] = [];
  mensaje: string = '';

  constructor(
    private cursoService : CursoService,
    private messageService : MessageService
  ) {}

  ngOnInit(): void {
    this.listCursos();
    this.messageService.getMessage().subscribe(message => {
      this.mensaje = message;
    });
  }

  listCursos() {
    this.cursoService.getCursoList().subscribe(
      data => {
        this.cursos = data;
        console.log(this.cursos);
      }
    );
  }

  deleteCurso(id : number) {
    this.cursoService.deleteCursoById(id).subscribe(
      () => this.listCursos()
    );
  }
}
