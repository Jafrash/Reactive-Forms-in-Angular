import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  standalone:true,
  selector: 'app-form-validation',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './form-validation.html',
  styleUrls: ['./form-validation.css'],
})
export class FormValidation {
  loginForm:FormGroup;
  constructor(private fb:FormBuilder){
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.email],
      password:['',Validators.minLength(6)],
      phone:['']
    });
  }

  onSubmit() {

    if (this.loginForm.valid) {
      console.log("Login Data:", this.loginForm.value);
    } 
    else {
      console.log("Form Invalid");
    }

   }
}
