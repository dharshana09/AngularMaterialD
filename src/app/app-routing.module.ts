import { AddDetailComponent } from './add-detail/add-detail.component';
import { LoginComponent } from './login/login.component';
import { HorseDetailComponent } from './horse-detail/horse-detail.component';
import { HorsesComponent } from './horses/horses.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

const routes: Routes = [

  
  {path:'login',component:LoginComponent},
  {path:'addDetail',component:AddDetailComponent},
  {path:'horses',component:HorsesComponent},
  { path:'detail/:id', component:HorseDetailComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
