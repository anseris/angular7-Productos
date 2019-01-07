import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: '../vistas/productos.component.html',
  styleUrls: ['../estilos/productos.component.css'],
  providers: [ProductosService]
})
export class ProductosComponent implements OnInit {
  public titulo: string;
  public productos: Producto[];
  public resultCrear;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productosService: ProductosService
  ) {
    this.titulo = 'Listado de productos';
  }


  ngOnInit() {
   
    this._productosService.getProductos().subscribe(
      result => {
        this.resultCrear = result;
         if (this.resultCrear.code !== 200) {
              console.log(result);
          } else {
              this.productos = this.resultCrear.data;
              console.log(this.productos);
          }

      },
      error => {
          console.log(<any>error);
      }
  );

  }

}
