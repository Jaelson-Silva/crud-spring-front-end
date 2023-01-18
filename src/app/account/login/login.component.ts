import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private elRef: ElementRef) {
    this.elRef.nativeElement.style.setProperty('--bs-btn-disabled-bg',           "red", "important")

    // console.log(document.getElementsByClassName("btn:disabled"))


   }

  ngOnInit(): void {
  }

}
