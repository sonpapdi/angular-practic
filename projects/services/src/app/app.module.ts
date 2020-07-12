import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataLoggerComponent } from './data-logger/data-logger.component';
import { DataMapperComponent } from './data-mapper/data-mapper.component';
import { SampleService } from './sample.service';
import { BarComponent } from './bar/bar.component';
import { OpsComponent } from './ops/ops.component';
import { ProgressService } from './progress.service';

@NgModule({
  declarations: [
    AppComponent,
    DataLoggerComponent,
    DataMapperComponent,
    BarComponent,
    OpsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SampleService,ProgressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
