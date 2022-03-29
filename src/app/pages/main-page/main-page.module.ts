import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { ModalWindowLoginFormModule } from 'src/app/components/modal-window-login-form/modal-window-login-form.module';

@NgModule({
  imports: [
    CommonModule,
    ModalWindowLoginFormModule,
  ],
  declarations: [MainPageComponent]
})
export class MainPageModule { }
