import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxUIModule } from '@swimlane/ngx-ui';
import { MenuComponentComponent } from './menu-component/menu-component.component';

import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponentComponent } from './cover-component/cover-component.component';
import { InfoAccederComponentComponent } from './info-acceder-component/info-acceder-component.component';
import { ResourceComponentComponent } from './resource-component/resource-component.component';
import { RedesComponentComponent } from './redes-component/redes-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponentComponent,
    CoverComponentComponent,
    InfoAccederComponentComponent,
    ResourceComponentComponent,
    RedesComponentComponent,
    FooterComponentComponent,
    MenuMobileComponent
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
