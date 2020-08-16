import { Component, OnInit } from '@angular/core';
// import { InterpolationConfig } from '@angular/compiler';
// import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  </h2>
  <input #myinput type="text">
   <button (click)="logmessage(myinput.value)">log</button>
`,
styles:[]
})
export class TestComponent implements OnInit {

public name ="codevalution"

  constructor() { }

  ngOnInit() {
  }

logmessage(value){
  console.log(value);

}
}
