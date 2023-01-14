import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../shared/account.service';
import { AbstractControl, NonNullableFormBuilder, ValidationErrors, Validators, FormBuilder } from '@angular/forms';
import { AppComponent } from '../../../app.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'create-account-form',
  templateUrl: './create-account-form.component.html',
  styleUrls: ['./create-account-form.component.scss']
})
export class CreateAccountFormComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    confirmEmail: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]]
  }, { validators: [ CreateAccountFormComponent.validatorEmail, CreateAccountFormComponent.validatorPassword ] })

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private app: AppComponent) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.form.value);

      //mensagem de criação da conta
      this.app.showSuccess('Usuário criado com sucesso')
    } catch (error) {
      this.app.showError(error as HttpErrorResponse)
    }
  }

  static validatorPassword(form: AbstractControl): any {
    const password = form.get('password')
		const confirmPassword = form.get('confirmPassword')

		if (!password || !confirmPassword) return

		(password.value !== confirmPassword.value) ? confirmPassword.setErrors({ 'isnot-match': true }) : confirmPassword.setErrors(null)
  }

  static validatorEmail(form: AbstractControl): any {
    const email = form.get('email')
		const confirmEmail = form.get('confirmEmail')

		if (!email || !confirmEmail) return

		(email.value !== confirmEmail.value) ? confirmEmail.setErrors({ 'isnot-match': true }) : confirmEmail.setErrors(null)
  }

}
