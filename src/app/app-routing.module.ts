import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // Ruta por defecto (puede ser la página de inicio)
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Rutas de autenticación
  { path: 'auth', loadChildren: () => import('./modules/authentication/authentication-routing.module').then(m => m.AuthenticationRoutingModule) }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
