import { SharedModule } from './../shared/shared.module';

import { CourseService } from './home/services/courses.service';
import { homeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';



@NgModule({
  declarations: [
    homeComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ],
  providers: [
    CourseService
  ]
})
export class PagesModule { }
