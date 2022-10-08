import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PvTheMostBasicNgLibraryModule} from 'pv-the-most-basic-ng-library';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TheMostBasicNgLibraryDemoComponent } from './the-most-basic-ng-library-demo/the-most-basic-ng-library-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    TheMostBasicNgLibraryDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PvTheMostBasicNgLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
