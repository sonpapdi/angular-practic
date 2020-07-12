import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { TabRow } from '../data-domain';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-data-tab',
  templateUrl: './data-tab.component.html',
  styleUrls: ['./data-tab.component.css']
})
export class DataTabComponent implements OnInit {

  @Input()
  rows : Array <TabRow> = new Array()

@Output('delete')
  deleteRow :EventEmitter<TabRow> = new EventEmitter() 

  constructor() { }

  ngOnInit() {
    

  }
  onRowDelete( row:TabRow){
    console.log('D elete Clicked',row)
    this.deleteRow.emit(row)
  }

}