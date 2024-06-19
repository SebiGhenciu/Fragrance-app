import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importă CommonModule
import { UserService } from '../../../services/user/user.service';
import { User } from '../../../models/user.model';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  registerForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    email: new FormControl<string>(''),
    password: new FormControl<string>('')
  });
  loginForm: FormGroup = new FormGroup({
    name: new FormControl<string>(''),
    password: new FormControl<string>('')
  });




  isSignUpMode = false;

  switchToSignUp() {

    this.isSignUpMode = true;

  }

  switchToSignIn() {

    this.isSignUpMode = false;
  }

  loginObj: any = {
    userName: '',
    password: ''
  };
  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) {
    if (this.userService.loggedUser != null && !this.userService.isLoginExpired()) {
      this.router.navigate(['main-page']);

    }
  }

  onLogin() {
    this.userService.login(this.loginForm.value['name'], this.loginForm.value['password']);
    this.router.navigate(['main-page']);
  }

  register() {
    let user: User = {
      id: '',
      username: this.registerForm.value['name'],
      password: this.registerForm.value['password'],
      email: this.registerForm.value['email'],
      role: 0
    }
    this.userService.register(user)
  }
}
