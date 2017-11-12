import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PasswordValidation} from '../../libraries/password-validation';
import {UserService} from "../../services/user.service";
import {isSuccess} from "@angular/http/src/http_utils";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  isSuccess = false;
  isPassMismatch = false;

  constructor(private userService: UserService) { }

  ngOnInit() {

    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(/^[A-Za-z0-9]/)]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/)]),
      confirmPassword: new FormControl('', [Validators.required])
    });


  }

  registerUser(){
    console.log(this.registrationForm);

    const username = this.registrationForm.get('username').value;
    const password = this.registrationForm.get('password').value;
    const confPass = this.registrationForm.get('confirmPassword').value;

    if (password !== confPass){
      this.isPassMismatch = true;
    }else{
      this.isPassMismatch = false;
    }

    if (this.registrationForm.valid && !this.isPassMismatch){
      const user = {
        username: username,
        password: password
      };

      this.userService.registerUser(user).subscribe(
        (user) => {
          if(user.status){
            this.isSuccess = true;
            this.registrationForm.reset();
          }else{
            this.isSuccess = true;
          }

          setTimeout(
            () => {
              this.isSuccess = false;
            }, 2000
          );
        }
      );
    }
  }

}
