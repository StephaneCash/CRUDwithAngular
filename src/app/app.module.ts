import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FilsComponentComponent } from './fils-component/fils-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FilsComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
