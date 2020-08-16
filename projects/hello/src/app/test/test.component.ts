import { Component, OnInit } from '@angular/core';
// import { InterpolationConfig } from '@angular/compiler';
// import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  </h2>
  <input [(ngModel)] ="name" type = "text">  
{{name}}

`,
styles:[]
})
export class TestComponent implements OnInit {

  public name ="";

  constructor() { }

  ngOnInit() {
  }



}

