import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalWindowLoginFormComponent } from './modal-window-login-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [ModalWindowLoginFormComponent],
  exports: [ModalWindowLoginFormComponent]
})
export class ModalWindowLoginFormModule { }
