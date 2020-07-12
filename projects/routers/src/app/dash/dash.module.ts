import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [DashComponent],
  imports: [
    CommonModule,
    AppRoutingModule 
  ]
})
export class DashModule { }
