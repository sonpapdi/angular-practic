import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives1';
ispara= false;
mobs =[
  'apple','samsung','mi'
]
  onOkay(){
this.ispara=!this.ispara;

  }
}
