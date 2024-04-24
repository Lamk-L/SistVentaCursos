import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../model/curso';
import { CursoService } from '../../../service/curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrl: './curso-edit.component.css'
})
export class CursoEditComponent implements OnInit {

  id: number = 0;
  titulo: string = '';
  descripcion: string = '';
  precio: number = 0;
  duracion: number = 0;
  nivel: string = '';
  vacantes: number = 0;
  curso: Curso = new Curso();

  constructor(
    private cursoService: CursoService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Obtener el ID del curso de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = parseInt(idParam, 10);
      // Aquí deberías implementar un método en tu servicio para obtener los detalles del curso por ID
      this.cursoService.getCursoById(this.id).subscribe(
        (curso: Curso) => {
          this.curso; // Asigna el objeto curso obtenido del servicio
        },
        error => {
          console.error('Error al obtener los detalles del curso:', error);
        }
      );
    }
  }

  updateCurso() {
    this.cursoService.updateCurso(this.curso).subscribe(
      () => {
        // Redirigir al usuario a la pantalla CUrsos con un mensaje de éxito
        this.router.navigate(['/cursos']);
        this.messageService.setMessage('Los datos del curso han sido actualizados.');
      },
      error => {
        console.error('Error al actualizar los detalles del curso:', error);
      }
    );
  }
}
