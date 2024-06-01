import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importă CommonModule


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

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
  constructor(private router: Router){}

  onLogin() {
    if(this.loginObj.userName == "admin" && this.loginObj.password == "admin"){
      this.router.navigateByUrl('/products')
    } 
    else{
      alert("wrong cred")
    }
  }
}
