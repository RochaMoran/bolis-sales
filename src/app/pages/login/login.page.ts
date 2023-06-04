import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  data = null;
  showPassword: boolean = false;

  constructor(private formBuilder: FormBuilder) { 
    this.formLogin = this.initForm();
  }
  
  ngOnInit() {
  }

  initForm() {
    return this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (!this.usernameInvalid && !this.passwordInvalid && this.formLogin.valid) {
      console.log(this.formLogin.value);
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  get formLoginControls() {
    return this.formLogin.controls;
  }

  get usernameInvalid() {
    return (
      this.formLogin.get('username')?.invalid && this.formLogin.get('username')?.touched
    );
  }
  
  get passwordInvalid() {
    return (
      this.formLogin.get('password')?.invalid && this.formLogin.get('password')?.touched
    );
  }
}
