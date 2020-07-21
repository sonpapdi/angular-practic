import { Component ,OnInit} from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular 9 reactive forms validation';
  regForm:FormGroup;
  submitted = false;


  constructor( private formbuilder:FormBuilder){}

    ngOnInit(){

      
    }
  }

