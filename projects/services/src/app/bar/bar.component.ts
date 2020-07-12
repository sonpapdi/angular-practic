import { Component, OnInit } from '@angular/core';
import { ProgressService, progressData, progressBar } from '../progress.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
progress : number =80
  constructor(
    private progressService : ProgressService
  ) { }

  ngOnInit() {
    this.progressService.em.subscribe((prgEv : progressData) => {
      if(prgEv.progress==progressBar.NEGATIVE){
      this.progress -=2
      }else if(prgEv.progress==progressBar.POSITIVE){
        this.progress +=2
      }
      })
    }

}
