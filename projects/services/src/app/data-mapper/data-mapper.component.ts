import { Component, OnInit } from '@angular/core';
import { SampleService } from '../sample.service';

@Component({
  selector: 'app-data-mapper',
  templateUrl: './data-mapper.component.html',
  styleUrls: ['./data-mapper.component.css']
})
export class DataMapperComponent implements OnInit {
mapcnt = 0
  constructor(
    private sample: SampleService
  ) { }

  ngOnInit() {
  }
onmap(){
   this.mapcnt=this.sample.cnt++
}
}
// let se =new SampleService()
// let dmc = new DataMapperComponent(se)