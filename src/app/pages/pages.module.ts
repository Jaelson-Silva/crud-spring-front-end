import { SharedModule } from './../shared/shared.module';

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
  providers: [ ]
})
export class PagesModule { }
