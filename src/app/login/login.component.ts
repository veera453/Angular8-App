import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  username: string;
  password: string;

  constructor(private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get loginFormValues(){
    return this.loginForm.controls;
  }

  login(){
     this.username = this.loginFormValues.username.value;
     this.password = this.loginFormValues.password.value;

     if(this.username === 'test' && this.password === 'test'){
         this.router.navigate(['./componentOne']);
     }
  }

}
