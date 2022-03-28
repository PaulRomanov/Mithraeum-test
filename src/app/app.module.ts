import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalWindowLoginFormModule } from './components/modal-window-login-form/modal-window-login-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalWindowLoginFormModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
