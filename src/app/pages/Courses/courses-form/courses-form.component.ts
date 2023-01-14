import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';
import { Courses } from '../courses/model/course';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../courses/services/courses.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements DoCheck {

  @Input() onForm: boolean= false;
  @Input() course: any;
  @Output() cancelForm: EventEmitter<boolean> = new EventEmitter();
  @Output() saveForm: EventEmitter<Courses> = new EventEmitter();
  @Output() editForm: EventEmitter<Courses> = new EventEmitter();

  setEdit: boolean = true

  form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
      category: ['', [Validators.required]]
  });

  public category = [
      {category: "front-end"},
      {category: "back-end"}
  ]

  constructor(private formBuilder: NonNullableFormBuilder, private courseService: CourseService, private app: AppComponent) { }

  ngDoCheck(): void {
      if(this.course.name && this.setEdit) {
          this.form.setValue({
              name: this.course.name,
              category: this.course.category
          })
          this.setEdit = false
      }
  }

  closeDialog() {
      this.cancelForm.emit(true)
  }

  onSave() {
      this.saveForm.emit(this.form.value as Courses)
  }

  onEdit(event: Courses) {
      const payload: Courses = {...this.form.value, _id: event._id} as Courses

      this.editForm.emit(payload)
  }

}
