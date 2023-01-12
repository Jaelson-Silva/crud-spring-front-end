import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Courses } from '../courses/model/course';
import { NonNullableFormBuilder } from '@angular/forms';
import { CourseService } from '../courses/services/courses.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  @Input() onForm: boolean= false;
  @Input() course: any;
  @Output() cancelForm: EventEmitter<boolean> = new EventEmitter();
  @Output() loading: EventEmitter<boolean> = new EventEmitter();
  @Output() saveForm: EventEmitter<Courses> = new EventEmitter();

  form = this.formBuilder.group({
    name: [''],
    category: ['']
  });

  public category = [
    {category: "front-end"},
    {category: "back-end"}
  ]

  teste: boolean = true

  constructor(private formBuilder: NonNullableFormBuilder, private courseService: CourseService, private app: AppComponent) {

   }

  ngOnInit(): void { }

  ngDoCheck(): void {
    if(this.course.name) {
        this.form.setValue({
            name: this.course.name,
            category: this.course.category
        })
      this.course = []
    }
  }

  closeDialog() {
    this.cancelForm.emit(true)
  }

  onSave() {
    this.loading.emit(true);
    this.courseService.create(this.form.value).subscribe({
      next: res => {
        this.saveForm.emit(res);
        this.loading.emit(false);
        this.cancelForm.emit(true)
        this.app.showSuccess('Um novo curso foi criado com sucesso')
      },
      error: error => {
        return this.app.showError(error);
      }
    })
  }

  onEdit(event: Courses) {
    // const payload = event._id

    this.loading.emit(true);
    this.courseService.update(event).subscribe({
      next: res => {
        this.saveForm.emit(res);
        this.loading.emit(false);
        // this.showDialogSaveCourse = false;
        this.cancelForm.emit(true)
        this.app.showSuccess('Curso editado com sucesso')
      },
      error: error => {
        this.loading.emit(false);
        return this.app.showError(error);
      }
    })

  }

}
