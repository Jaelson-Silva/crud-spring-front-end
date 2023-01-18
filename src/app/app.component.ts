import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'projeto_angular_cli';

  constructor(private messageService: MessageService, private elRef: ElementRef) {
    // this.elRef.nativeElement.style.setProperty('--bs-btn-disabled-bg',           "red", "important")

    // document.getElementsByClassName(".p-button")
  }

  showError(error: HttpErrorResponse) {
    this.messageService.add({severity:'error', summary:`error: ${error.status}`, detail: error.message});
  }

  showSuccess(success: string) {
    this.messageService.add({severity:'success', detail: success});
  }

  showWarn(warn: any) {
    this.messageService.add({severity:'warn', summary:`error: ${warn.status}`, detail: warn.message});
  }

  showInfo(info: any) {
    this.messageService.add({severity:'info', summary:`error: ${info.status}`, detail: info.message});
  }
}
