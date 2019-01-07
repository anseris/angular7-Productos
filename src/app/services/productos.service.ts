import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
import { promise } from 'protractor';


@Injectable()
export class ProductosService {
  public url: string;

  constructor(
    public _http: HttpClient
   ) {
    this.url = GLOBAL.url;
   }

   getProductos(): Observable<any>{
    return this._http.get(this.url + 'productos');
  }
  
  getProducto(id) {
    return this._http.get(this.url + 'productos/' + id);
  }

  addProducto(producto: Producto) {
    const json = JSON.stringify(producto);
    const params = 'json=' + json;
    const headers = new HttpHeaders({'Content-Type' : 'application/x-www-form-urlencoded'});

    return this._http.post(this.url + 'productos', params, {headers: headers});
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject) => {
      const  formData: any = new FormData();
      const  xhr = new XMLHttpRequest();

      for (let i = 0; i < files.length; i++) {
        formData.append('uploads[]', files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
}
