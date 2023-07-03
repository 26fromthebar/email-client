import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [InputComponent, HeaderComponent, ModalComponent],
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  exports: [InputComponent, HeaderComponent, ModalComponent],
})
export class SharedModule {}
