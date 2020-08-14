import { Component, OnInit } from '@angular/core';
import { InterpolationConfig } from '@angular/compiler';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  <h2>
  <h2 class="text-success">codevolution</h2>
  <h2 [class]="successclass">codekul</h2>
`,
styles:[
`.text-success{
  color : red;
}
.text-danger{
  color : green;
}
.text-special{
  color : italic;
}
`
]
})
export class TestComponent implements OnInit {

public name ="codevolution";
public successclass ="text-success";


  constructor() { }

  ngOnInit() {
  }

}
