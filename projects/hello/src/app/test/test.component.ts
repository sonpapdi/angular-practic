import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import { getCurrencySymbol } from '@angular/common';


@Component({
  selector: 'app-test',
  template:`
 
<h2>{{"Hello"+parentData}}</h2>
<button (click)="fireEvent()">send Event</button>
`,
styles:[]
})
export class TestComponent implements OnInit {
@Input('parentData') public parentData;
 @Output()childEvent = new EventEmitter

  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.childEvent.emit('Hey codevolution');
  }
}

