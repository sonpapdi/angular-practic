import { Component, OnInit } from '@angular/core';
// import { InterpolationConfig } from '@angular/compiler';
// import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2 *ngIf ="displayname; else elseBlock">
  welcome 
  </h2>

  <ng-template  #elseBlock>
  <h2>
  Name is Hiddan
  </h2>
  </ng-template>

`,
styles:[]
})
export class TestComponent implements OnInit {

  displayname = true;
  
  constructor() { }

  ngOnInit() {
  }



}

