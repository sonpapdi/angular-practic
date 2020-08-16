import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
 
<div *ngFor="let color of colors; index as i">
<h2> {{i}} {{color}}</h2>
</div>
`,
styles:[]
})
export class TestComponent implements OnInit {

  public colors =["red","blue","green","yellow"];
  constructor() { }

  ngOnInit() {
  }
}

