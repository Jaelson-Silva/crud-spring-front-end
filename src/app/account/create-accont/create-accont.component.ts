import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-accont',
  templateUrl: './create-accont.component.html',
  styleUrls: ['./create-accont.component.scss']
})
export class CreateAccontComponent implements OnInit {

  account = {
    name: '',
    email: '',
    password: '',
  }

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);

      //mensagem de criação da conta
      console.log(result)
    } catch (error) {
      console.log(error);
    }
  }

}
