import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {

  constructor( private router : Router) { }

  ngOnInit() {
  }
tochat(){
this.router.navigate(['chat'])
}
}
