import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/services/courses.service';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { }
