import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

//Componentes
import { HomeComponent } from './component/home.component';
import { ErrorComponent } from './component/error.component';
import { ProductosComponent } from './component/productos.component';
import { ProductoAddComponent } from './component/producto-add.component';
import { ProductosDetailComponent } from './component/productoDetail.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'addProductos', component: ProductoAddComponent},
    {path: 'productoDetail/:id', component: ProductosDetailComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);