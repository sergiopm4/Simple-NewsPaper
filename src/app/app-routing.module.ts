import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitularesComponent } from './titulares/titulares.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: "", component: TitularesComponent },
  { path: "titulares", component: TitularesComponent },
  { path: "articulo", component: ArticuloComponent },
  { path: "articulo/:id", component: ArticuloComponent },
  { path: "search", component: SearchComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: TitularesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
