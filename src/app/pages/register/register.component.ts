import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';

interface RegisterForm {
  name: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;
}

@Component({
  selector: 'app-register',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [LoginService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm!: FormGroup<RegisterForm>;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  submit() {
    this.loginService.login(this.registerForm.value.email, this.registerForm.value.password).subscribe({
      next: () => this.toastService.success('Login successful!'),
      error: () => this.toastService.error('Login failed!')
    })
  }

  navigate() {
    this.router.navigate(['login']);
  }
}
