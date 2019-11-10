import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TeoricoComponent } from './components/teorico/teorico.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'teorico/:id', component: TeoricoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
