import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Suponiendo que tienes un componente de login

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // Otras rutas de autenticación
];

@NgModule({
 
  imports: [RouterModule.forChild(authRoutes)], 
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
