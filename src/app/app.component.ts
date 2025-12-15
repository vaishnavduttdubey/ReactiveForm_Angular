  import { Component } from '@angular/core';
  import {
    FormControl,
    FormGroup,
    Validators,
    ReactiveFormsModule,
  } from '@angular/forms';
  import { NgIf } from '@angular/common';
  import Swal from 'sweetalert2';


  @Component({
    selector: 'app-root',

    imports: [ReactiveFormsModule, NgIf],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
  })
  export class AppComponent {
    title = 'question_2';

    userAccount = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).+$/),
      ]),

      remember: new FormControl(false, [Validators.requiredTrue]),
    });

    onSubmit() {
      console.log(this.userAccount.value);
      Swal.fire({
        title: 'Congratulations',
        text: 'You have successfully logged in.',
        icon: 'success',
      });
    }
  }
  // onSubmit() {
  //   if (this.userAccount.valid) {
  //     console.log(this.userAccount.value);
  //    } //else {
  //   //   console.log('This Form is invalid,please cheak again');
  //   // }
  // }
