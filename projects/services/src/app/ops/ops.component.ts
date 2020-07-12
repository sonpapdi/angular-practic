import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../progress.service';

@Component({
  selector: 'app-ops',
  templateUrl: './ops.component.html',
  styleUrls: ['./ops.component.css']
})
export class OpsComponent implements OnInit {
progress :number
  constructor(
    private progressservice :ProgressService
  ) { }

  ngOnInit() {
  }
  onprogress(btn : number){
    this.progressservice.em.emit({progress : btn})
    }

  }


