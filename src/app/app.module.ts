import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StephComponent } from './steph/steph.component';
import { CashComponent } from './cash/cash.component';
import { KikoniComponent } from './kikoni/kikoni.component';

@NgModule({
  declarations: [
    AppComponent,
    StephComponent,
    CashComponent,
    KikoniComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
