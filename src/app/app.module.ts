import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//Rutas
import { routing, appRoutingProviders} from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//SERVICIOS

import { ProductosService } from './services/productos.service';

//COMPONENTES
import { HomeComponent } from './component/home.component';
import { ErrorComponent } from './component/error.component';
import { ProductosComponent } from './component/productos.component';
import { ProductoAddComponent } from './component/producto-add.component';
import { ProductosDetailComponent } from './component/productoDetail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ErrorComponent,
    ProductosComponent,
    ProductoAddComponent,
    ProductosDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders, ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
