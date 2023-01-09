import { AppComponent } from './../../app.component';
import { Courses } from '../home/model/course';
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../home/services/courses.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class homeComponent implements OnInit {

  public courses: Courses[] = [];
  public isLoading: boolean = true

  constructor(private courseService: CourseService, private app: AppComponent) {
    this.courseService.getProductsSmall().subscribe(
      (res) => {
        this.courses = res
        this.isLoading = false
      },
      (error) => {
        this.isLoading = false
        return this.app.showError(error)
      }
    )
  }

  ngOnInit() {
  }
}
