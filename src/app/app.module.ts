import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FirstModule } from './first/first.module';
import { LyfComponent } from './lyf/lyf.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    LyfComponent,
    BootstrapComponent
  ],
  imports: [
    BrowserModule,FirstModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
