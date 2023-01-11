import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  };

  constructor(private accountService: AccountService, private router: Router, private app: AppComponent) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
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
