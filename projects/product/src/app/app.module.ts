import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProNavComponent } from './pro-nav/pro-nav.component';
import { ProCardComponent } from './pro-card/pro-card.component';
import { ProFooterComponent } from './pro-footer/pro-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProNavComponent,
    ProCardComponent,
    ProFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
