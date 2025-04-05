import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule, RouterLink, NgIf],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private router: Router) {}
  userDetails = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.userDetails.valid) {
      // Handle login logic here
      console.log(this.userDetails.value.password);
    }
  }

  // navigate to dashboard
  toDashboard() {
    this.router.navigate(['/Common/dashboard']);
  }
}
