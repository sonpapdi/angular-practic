import { Component, OnInit } from '@angular/core';
// import { InterpolationConfig } from '@angular/compiler';
// import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  </h2>
 <button (click)="onclick()">Greet</button>
 {{greeting}}
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
  onclick(){
    console.log('welcome to codekul')
    this.greeting ="welcome"
  }

}
