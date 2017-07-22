import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from '@angular/material';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';

import 'hammerjs';

@NgModule({
  imports: [BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdButtonModule,
    MdCheckboxModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [MdButtonModule, MdCheckboxModule],

})
export class AppModule { }
