import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../model/cliente';
import { ClienteService } from '../../../service/cliente.service';
import { MessageService } from '../../../service/message.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrl: './cliente-list.component.css'
})
export class ClienteListComponent implements OnInit {
  clientes : Cliente [] = [];
  mensaje: string = '';

  constructor(
    private clienteService : ClienteService,
    private messageService: MessageService
  ) {}
  
  ngOnInit(): void {
    this.listClientes();
    this.messageService.getMessage().subscribe(message => {
      this.mensaje = message;
    });
  }

  listClientes() {
    this.clienteService.getClienteList().subscribe(
      data => {
        this.clientes = data;
        console.log(this.clientes);
      }
    );
  }

  deleteCliente(id: number){
    this.clienteService.deleteClienteById(id).subscribe(
      ()=> this.listClientes()
    );
  }
}
