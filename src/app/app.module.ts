import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { MenuComponentComponent } from './menu-component/menu-component.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponentComponent } from './cover-component/cover-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    CoverComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxUIModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
