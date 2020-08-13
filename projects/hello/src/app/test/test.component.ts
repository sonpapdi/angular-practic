import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:`
  <h2>
  welcome {{name}}
  <h2>
  hiiii {{string}}

  <h2>{{2+2}}
  </h2>
  <h2>{{"pooja" + "nakate"}}</h2>
  <h2> {{name.length}}</h2>
  <h2>{{name.toUpperCase()}}</h2>
  <h2>{{greetUser()}}</h2>
`,
  styles: []
})
export class TestComponent implements OnInit {

  public name= "pooja";
  public string ="pooja"+ "mau"
 public add = 2+3
  constructor() { }

  ngOnInit() {
  }

  greetUser(){

     return "Hello" + this.name;
  }

}
