import { Component, OnInit, Input } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
 
<h2>{{"Hello"+parentData}}</h2>
`,
styles:[]
})
export class TestComponent implements OnInit {
@Input('parentData') public parentData;

  constructor() { }

  ngOnInit() {
  }
}

