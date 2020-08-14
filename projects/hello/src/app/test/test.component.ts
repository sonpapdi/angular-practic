import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  </h2>
  // style binding

  <h2>  style binding</h2>
  <h2 [style.color]=" hasError ? 'red' :'green'"> style binding </h2>

<h2 [style.color]="higtlightcolor">style binding 2</h2>

`,
styles:[
`
`
]
})
export class TestComponent implements OnInit {

public name ="codevolution";
public hasError = true;
public isSpecial = true;
public higtlightcolor ="orange"


  constructor() { }

  ngOnInit() {
  }

}
