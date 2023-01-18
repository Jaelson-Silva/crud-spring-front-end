import { MainComponent } from './main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../account/shared/auth.guard';
import { homeComponent } from './home/home.component';
import { WhiteLabelComponent } from './white-label/white-label.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: homeComponent },
      { path: 'whiteLabel', component: WhiteLabelComponent }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./Courses/courses.module').then(m => m.CoursesModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
