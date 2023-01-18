import { SharedModule } from './../shared/shared.module';

import { homeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { WhiteLabelComponent } from './white-label/white-label.component';



@NgModule({
  declarations: [
    homeComponent,
    WhiteLabelComponent,
  ],
  imports: [
    SharedModule,
    PagesRoutingModule,
  ],
  providers: [ ]
})
export class PagesModule { }
