import { PrimengModule } from './../core/modules/prime-ng/prime-ng.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    PrimengModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
