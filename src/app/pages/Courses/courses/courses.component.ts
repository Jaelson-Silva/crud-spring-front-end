import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Courses } from '../model/course';
import { CourseService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Courses[] = [];
  public coursesAux: Courses[] = [];
  public isLoading: boolean = true;

  public showDialogSaveCourse: boolean = false;
  public showDialogEditCourse: boolean = false;

  form: FormGroup;

  constructor(private courseService: CourseService, private app: AppComponent, private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    });

    this.courseService.List().subscribe(res => this.coursesAux = res);
    this.courseService.List().subscribe(
      (res) => {
        this.courses = res;
        this.isLoading = false;
      },
      (error) => {
        this.isLoading = false;
        return this.app.showError(error);
      }
    )
  }

  ngOnInit() {  }

  showDialogSave() {
    this.showDialogSaveCourse = true;
    this.showDialogEditCourse = false;
  }

  showDialogEdit() {
    this.showDialogEditCourse = true;
    this.showDialogSaveCourse = false;
  }

  closeDialog() {
    this.showDialogSaveCourse = false;
    this.showDialogEditCourse = false;
  }

  onSubmit() {
    // console.log(this.form.value)
    this.courseService.save(this.form.value).subscribe(
      (res) => {
        console.log(res)
      },
      (error) => {
        return this.app.showError(error);
      }
    )
  }

}
