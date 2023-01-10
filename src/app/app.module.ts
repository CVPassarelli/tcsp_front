import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components';
import { FooterComponent } from './shared/components';
import { SideMenuComponent } from './shared/components';
import { ToastyComponent } from './shared/components/toasty/toasty.component';
import { ToastyService } from './shared/components/toasty/toasty.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderComponent,
    FooterComponent,
    SideMenuComponent,
    FontAwesomeModule,
    ToastyComponent,
  ],
  providers: [ToastyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
