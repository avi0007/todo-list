import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { TodosComponent } from './component/todos/todos.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { EqualValidatorDirective } from './directives/equal-validator.directive';
import {UserService} from "./services/user.service";
import {Router, RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    RegistrationComponent,
    EqualValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
