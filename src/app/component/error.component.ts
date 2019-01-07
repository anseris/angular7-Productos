import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: '../vistas/error.component.html',
  styleUrls: ['../estilos/error.component.css']
})
export class ErrorComponent implements OnInit {
  public titulo: string;

  constructor() { 
    this.titulo = 'Pagina no encontrada';
  }

  ngOnInit() {
  }

}
