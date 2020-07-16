import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent implements OnInit {


  myFrm : NgForm

  constructor() { }

  ngOnInit() {
  }

mySub( frm : NgForm){
  console.log(frm)
}



}
