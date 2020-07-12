import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './login/login/login.component';
import { AnalyaticsComponent } from './analytics/analyatics/analyatics.component';


const routes: Routes = [
  {path :'analytics',component :AnalyaticsComponent},
  {path :'login',component :LoginComponent},
  {path : 'profile',component :ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
