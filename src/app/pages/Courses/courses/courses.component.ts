import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Courses } from './model/course';
import { CourseService } from './services/courses.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  providers: [ConfirmationService]
})
export class CoursesComponent implements OnInit {

  public course: Courses[] = [];
  public courses: Courses[] = [];

  public isLoading: boolean = true;
  public dialogForm: boolean = false;

  public showDialog: boolean = false;
  public headerDialog: string = '';

  constructor(private courseService: CourseService, private app: AppComponent, private confirmationService: ConfirmationService) {
    this.refresh();
  }

  ngOnInit() {  }

  showDialogSave() {
	this.showDialog = true;
    this.dialogForm = true;
    this.headerDialog = 'Novo Curso';
  }

  showDialogEdit(event: any) {
      this.showDialog = true;
      this.dialogForm = false;
      this.headerDialog = 'Editar Curso';

      this.course = event;
  }

  closeDialog() {
      this.showDialog = false;
  }

  confirm(event: Event, id: string) {
      this.confirmationService.confirm({
          target: event.target as EventTarget,
          rejectLabel: 'não',
          acceptLabel: 'sim',
          message: 'Realmente deseja excluir este curso permanentemente?',
          icon: 'pi pi-exclamation-triangle',

          accept: () => {
            this.delete(id);
          }
      });
  }

  refresh() {
      this.courseService.List().subscribe({
          next: res => {
              this.courses = res;
              this.isLoading = false;
          },
          error: error => {
              this.isLoading = false;
              return this.app.showError(error);
          }
      })
  }

  save(course: Courses) {
      this.isLoading = true;

      this.courseService.create(course).subscribe({
          next: res => {
              this.refresh();
              this.isLoading = false;
              this.closeDialog();
              this.app.showSuccess('Um novo curso foi criado com sucesso');
          },
          error: error => {
              this.isLoading = false;
              return this.app.showError(error);
          }
      })
  }

  update(course: Courses) {
      this.isLoading = true;

      this.courseService.update(course).subscribe({
          next: res => {
              this.refresh();
              this.isLoading = false;
              this.closeDialog();
              this.app.showSuccess('Curso editado com sucesso');
          },
          error: error => {
              this.isLoading = false;
              return this.app.showError(error);
          }
      })

  }

  delete(id: string) {
      this.isLoading = true

      this.courseService.delete(id).subscribe({
          next: res => {
              this.refresh();
              this.isLoading = false;
              this.app.showSuccess('Curso removido com sucesso');
          },
          error: error => {
              this.isLoading = false;
              return this.app.showError(error);
          }
      })
  }
}
