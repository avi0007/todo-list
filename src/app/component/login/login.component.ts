import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSuccess = false;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup(
      {
        username: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
      }
    );
  }

  onLoginSubmit(){
    if (this.loginForm.valid) {
      var loginData = {
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value,
      };
    }
  }

}
