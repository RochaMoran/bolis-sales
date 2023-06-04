import { Router } from '@angular/router';
import { AuthenticationService } from './../../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Alert } from 'src/app/models/alert';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formLogin: FormGroup;
  data = null;
  showPassword: boolean = false;

  constructor(private router: Router, private formBuilder: FormBuilder, 
    private authenticationService: AuthenticationService,
    private toastController: ToastController
  ) { 
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
      const loginResp = this.authenticationService.login(this.formLogin.value.username, this.formLogin.value.password);
      
      if (loginResp) {
        this.setOpenAlert({message: 'Inicio de sesión exitoso', type: 'success'})
        this.router.navigate(['/home']);
      } else {
        this.setOpenAlert({message: 'Usuario o contraseña incorrectos', type: 'danger'})
      }
    } else {
      this.formLogin.markAllAsTouched();
    }
  }

  async setOpenAlert(alertParams: Alert) {
    const toast = await this.toastController.create({
      message: alertParams.message,
      duration: 2500,
      position: 'bottom',
      buttons: [
        {
          text: 'Cerrar',
          role: 'cancel',
        },
      ],
      color: alertParams.type,
      icon: alertParams.type === 'danger' ? 'alert-circle-outline' : 'information-circle-outline'
    });

    await toast.present();
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
