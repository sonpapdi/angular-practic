import { Injectable } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { Name } from './home/home';

@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  student =[
    {id: 101,name: "pooja",description:"pooja detail",email: "poojanakate4423.com"},
    {id: 102,name: "snehal",description:"snehal detail",email: "snehalnakate44.com"},
    {id: 101,name: "akshda",description:"shivani detail",email: "poojanakate2423.com"},
    {id: 101,name: "shivani",description:"shivani detail",email: "poojanakate3423.com"}
  ]

  constructor() { }

  public getstudent():Array<{id,name,description,email}>{
    return this.student;}

    public createstudent(student:{id,name,description,email}){
      this.student.push(student);
    }
  }

