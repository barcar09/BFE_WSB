import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import loginData from './login.json'
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent implements OnInit {
  wrongCredentials: boolean;
  form: FormGroup;
  formSubmitAttempt: boolean;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router,) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field)?.valid && this.form.get(field)?.touched) ||
      (this.form.get(field)?.untouched && this.formSubmitAttempt)
    );
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.value['username'] === loginData.username && this.form.value['password'] === loginData.password ) {
      localStorage.setItem('username', this.form.value['username']);
      this.authService.username = this.form.value['username'];
      this.authService.is_login = true
      this.router.navigateByUrl('/');
      }
      else {
        this.wrongCredentials = true
      }
    }
    this.formSubmitAttempt = true;
  }



}



  

