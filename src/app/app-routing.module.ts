import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaginaEntradaComponent } from './components/pagina-entrada/pagina-entrada.component';
import { PresentacionComponent } from './components/presentacion/presentacion.component';

const routes: Routes = [
  {path:'presentacion', component:PresentacionComponent},
  {path:'inicio', component:PaginaEntradaComponent},
  {path:'login',component: LoginComponent },
  {path:'',redirectTo:'/inicio', pathMatch:'full'},
  {path:'**',component:PaginaEntradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
