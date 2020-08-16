import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`

<div [ngSwitch]="color">
<div *ngSwitchCase ="'red'">you picked red color</div>
<div *ngSwitchCase ="'yellow'"> you picked yellow color</div>
<div *ngSwitchCase ="'green'"> you picked green color</div>
<div *ngSwitchDefault> pick again</div>
</div>

`,
styles:[]
})
export class TestComponent implements OnInit {
public color ="black";
  
  constructor() { }

  ngOnInit() {
  }
}

