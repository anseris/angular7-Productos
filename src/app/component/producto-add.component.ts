import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductosService } from '../services/productos.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
  selector: 'app-productos-add',
  templateUrl: '../vistas/producto-add.component.html',
  styleUrls: ['../estilos/producto-add.component.css'],
  providers: [ProductosService]
})
export class ProductoAddComponent implements OnInit {
  public titulo: string;
  public producto: Producto;
  public filesToUpload;
  public resultUpload;
  public resultSave;

  

  constructor(
      private _productosService: ProductosService,
      private _route: ActivatedRoute,
      private _router: Router

  ) {
    this.titulo = 'Crear nuevo producto';
    this.producto = new Producto(0, '', '', 0, '');
  }


  ngOnInit() {

  }
  onSubmit() {
      console.log(this.producto);
    if (this.filesToUpload.length >= 1) {
      this._productosService.makeFileRequest(GLOBAL.url + 'upload-file', [], this.filesToUpload).then((result) =>{
        console.log('oooooooooooooooooooo',result);
        this.resultUpload = result;
        this.producto.imagen = this.resultUpload.filename;
        this.saveProducto();
      }, (error) => {
          console.log(error)
      });
    } else {
        this.saveProducto();
    }
  }

  saveProducto() {
      console.log('KKKKKKKK', this.producto)
    this._productosService.addProducto(this.producto).subscribe(
        response => {
            this.resultSave = response;
          if ( this.resultSave.code) {
              console.log('Response', response)
              this._router.navigate(['/productos'])
          } else {
              console.log('jjjjjjj');
          }
        },
        error => {
            console.log(<any>error);
        }
    );
  }

  
  fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>>fileInput.target.files;
      console.log(this.filesToUpload);
  }


}
