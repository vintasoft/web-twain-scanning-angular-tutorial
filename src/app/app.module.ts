import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WebTwainScanningAngularTutorialComponent } from './web-twain-scanning-angular-tutorial/web-twain-scanning-angular-tutorial.component';

@NgModule({
  declarations: [
    AppComponent,
    WebTwainScanningAngularTutorialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
