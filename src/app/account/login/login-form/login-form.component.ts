import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AccountService } from '../../shared/account.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]]
  })

  constructor(private formBuilder: NonNullableFormBuilder, private accountService: AccountService, private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
  }

  async onSubmit() {
      try {
          const result = await this.accountService.login(this.form.value);
          console.log(`login efetuado: ${result}`);

          // navego para rota vazia novamente
          this.router.navigate(['']);
          this.app.showSuccess('Seja bem vindo!')
      } catch(error) {
          this.app.showError(error as HttpErrorResponse);
          console.error(error);
      }
  }

}
