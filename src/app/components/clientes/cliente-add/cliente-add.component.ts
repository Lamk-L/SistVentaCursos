import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../../../service/cliente.service';
import { MessageService } from '../../../service/message.service';
import { Cliente } from '../../../model/cliente';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrl: './cliente-add.component.css'
})
export class ClienteAddComponent implements OnInit {
  
  id : number = 0;
  nombre : string = '';
  apellido : string = '';
  email : string = '';

  constructor(
    private clienteService : ClienteService,
    private router: Router,
    private messageService: MessageService
  ) {}
  
  ngOnInit(): void {
    
  }

  addCliente() {
    let cliente = new Cliente(this.id, this.nombre, this.apellido, this.email);
    console.log(cliente);
    this.clienteService.createCliente(cliente).subscribe(
      () => {
        // Redirigir al usuario a la pantalla principal con un mensaje de éxito
        this.router.navigate(['/clientes']);
        this.messageService.setMessage('La creación del cliente fue un exito.');
      },
      error => {
        console.error('Error al crear un nuevo cliente:', error);
      }
    );
  }

}
