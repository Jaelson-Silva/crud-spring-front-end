import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Courses } from './model/course';
import { CourseService } from './services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  public course: Courses[] = [];
  public courses: Courses[] = [];
  public coursesAux: Courses[] = [];

  public isLoading: boolean = true;
  public dialogForm: boolean = false;

  public showDialog: boolean = false;
  public headerDialog?: string;

  constructor(private courseService: CourseService, private app: AppComponent, private formBuilder: NonNullableFormBuilder) {
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

    console.log(this.course)
  }

  ngOnInit() {  }

  showDialogSave() {
    this.showDialog = true
    this.dialogForm = true
    this.headerDialog = 'Novo Curso'
  }

  showDialogEdit(event: any) {
    this.showDialog = true
    this.dialogForm = false
    this.headerDialog = 'Editar Curso'

    this.course = event

  }

  closeDialog() {
      this.showDialog = false;
  }

  save(courses: Courses) {
    this.courses.push(courses)
  }

  showLoading(res: boolean) {
    this.isLoading = res;
  }
}
