import { Component,  SimpleChanges, Input} from '@angular/core';
import{ OnInit ,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
}from '@angular/core';
@Component({
  selector: 'app-lyf',
  templateUrl: './lyf.component.html',
  styleUrls: ['./lyf.component.css']
})
export class LyfComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {


  @Input()
  dt:String
  
  constructor() { }


  ngOnChanges(ch:SimpleChanges){
    console.log('ngOnChanges')
    console.log(ch)
  }
  ngOnInit() {
    console.log('ngOnIni')
  }

  ngDoCheck(){
    console.log('ngDoCheck')
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit')
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked')
  }
  ngAfterContentChecked(){
    console.log('  ngAfterContentChecked')
  }
  ngAfterViewInit(){
    console.log( 'ngAfterViewInit')
  }
  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}

