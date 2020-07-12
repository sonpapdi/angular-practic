import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  isPar=false
 mob =[
   'android','apple', 'moto','BB'
 ]
 bsob={'border':'1px solid red','color':'green'

 }
 isAl = false
  onOkay(){
  this.isPar =!this.isPar
}
// onClassIt(){
// this.isAl= ! this.isAl
// }
}

