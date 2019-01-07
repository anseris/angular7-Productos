import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-productos-detail',
  templateUrl: '../vistas/productoDetail.html',
  styleUrls: ['../estilos/productoDetail.css'],
  providers: [ProductosService]
})
export class ProductosDetailComponent implements OnInit {
  public producto: Producto;
  public resultProducto;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productosService: ProductosService
  ) {
  }

  getProducto(){
      this._route.params.forEach((params: Params) => {
        let id = params['id'];
        this._productosService.getProducto(id).subscribe(
            response => {
                this.resultProducto = response;
                if (this.resultProducto.code === 200){
                    this.producto = this.resultProducto.data;

                } else{
                    this._router.navigate(['/productos']);
                }
           },
            error => {
                console.log(<any>error);
            }
        );
      });
  }


  ngOnInit() {
      this.getProducto();

  }

}
