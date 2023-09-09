import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component'; // Suponiendo que tienes un componente de login
import { AssetPortfolioComponent } from './components/asset-portfolio/asset-portfolio.component';

const authRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cartera', component: AssetPortfolioComponent },
  // Otras rutas de autenticación
];

@NgModule({
 
  imports: [RouterModule.forChild(authRoutes)], 
  exports: [RouterModule],
})
export class AuthenticationRoutingModule { }
