import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },  // 👉 HomeComponent directamente en el path raíz
    { path: '**', redirectTo: '' }             // 👉 cualquier ruta no encontrada, redirigir a '/'
  ];
