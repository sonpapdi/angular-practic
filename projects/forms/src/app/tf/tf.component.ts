import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tf',
  templateUrl: './tf.component.html',
  styleUrls: ['./tf.component.css']
})
export class TfComponent implements OnInit {

  myFrm :NgForm
   
  editObj = {
    name :'androde',
    pass:'hi',
    email:'pooja@gmail.com',
    mob :'987876768'
  }

  constructor() { }

  ngOnInit() {
  }
mysub( frm :NgForm){
  console.log(frm.value)
 
}

}
