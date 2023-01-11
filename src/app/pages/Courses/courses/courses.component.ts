import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Courses } from './model/course';
import { CourseService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public courses: Courses[] = [];
  public coursesAux: Courses[] = [];
  category = [
    {category: "frontEnd"},
    {category: "backend"}
  ]

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
    this.isLoading = true;
    this.courseService.save(this.form.value).subscribe({
      next: res => {
        this.courses.push(res)
        this.isLoading = false;
        this.showDialogSaveCourse = false;
        this.app.showSuccess('Um novo curso foi criado com sucesso')
      },
      error: error => {
        return this.app.showError(error);
      }
    })
  }

}
