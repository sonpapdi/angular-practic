import { Component, OnInit } from '@angular/core';
// import { InterpolationConfig } from '@angular/compiler';
// import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  </h2>

  Event Binding //////

 <button (click)="onclick()">Greet</button>
 {{greeting}}
<button (click)="onclick($event)"></button>// $event to display DOM 

`,
styles:[

]
})
export class TestComponent implements OnInit {

public name ="codevolution";
public greeting =""


  constructor() { }

  ngOnInit() {
  }
  onclick( Event){
    console.log(event)
    this.greeting =event.type;// click event diplay
  }

}
