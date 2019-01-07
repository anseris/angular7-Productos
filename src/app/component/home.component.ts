import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: '../vistas/home.component.html',
  styleUrls: ['../estilos/home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = 'WebApp de productos de angular 7';
   }

  ngOnInit() {
  }

}
