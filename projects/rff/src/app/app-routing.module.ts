import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RfComponent } from './rf/rf.component'
import { TfComponent } from './tf/tf.component'


const routes: Routes = [
  { path: 'rf',component: RfComponent},
  { path: 'tf',component: TfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
