import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../service/cliente.service';
import { MessageService } from '../../../service/message.service';


@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.css'
})
export class ClienteEditComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  apellido: string = '';
  email: string = '';
  cliente: Cliente = new Cliente();


  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute, // Inyecta ActivatedRoute en el constructor
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    // Obtener el ID del cliente de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.id = parseInt(idParam, 10);
      // Aquí deberías implementar un método en tu servicio para obtener los detalles del cliente por ID
      this.clienteService.getClienteById(this.id).subscribe(
        (cliente: Cliente) => {
          this.cliente = cliente; // Asigna el objeto cliente obtenido del servicio
        },
        error => {
          console.error('Error al obtener los detalles del cliente:', error);
        }
      );
    }
  }

  updateCliente() {
    this.clienteService.updateCliente(this.cliente).subscribe(
      () => {
        // Redirigir al usuario a la pantalla Clientes con un mensaje de éxito
        this.router.navigate(['/clientes']);
        this.messageService.setMessage('Los datos del cliente han sido actualizados.');
      },
      error => {
        console.error('Error al actualizar los detalles del cliente:', error);
      }
    );
  }
}