import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './courses/services/courses.service';
import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesFormComponent } from './courses-form/courses-form.component';
import { ToastModule } from 'primeng/toast';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
  ],
  providers: [
    CourseService
  ]
})
export class CoursesModule { }
