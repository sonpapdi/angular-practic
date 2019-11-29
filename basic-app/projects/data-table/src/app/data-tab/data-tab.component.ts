import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { TabRow } from '../data-domain';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  @Input()
  row : Array <TabRow> = new Array()

@Output()
  delete :EventEmitter<TabRow> = new EventEmitter() 

  constructor() { }

  ngOnInit() {
    

  }
  onRowDelete(){
    console.log('delete Clicked')
  }

}
