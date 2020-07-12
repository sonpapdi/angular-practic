import { ProgressService } from './progress.service';
import { Injectable } from '@angular/core';
@Injectable()
export class SampleService {

cnt = 0

  constructor(
    private bar :ProgressService
  ) { }
}
