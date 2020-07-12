import {  EventEmitter, Injectable } from '@angular/core';
@Injectable()
export class ProgressService {


  em : EventEmitter<progressData> = new EventEmitter()
  constructor() { }
}
export interface progressData{
progress :number
}
export enum progressBar{
  POSITIVE =2,
  NEGATIVE =1
}