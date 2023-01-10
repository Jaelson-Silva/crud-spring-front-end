import { PrimengModule } from './../core/modules/prime-ng/prime-ng.module';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    PrimengModule
  ]
})
export class SharedModule { }
