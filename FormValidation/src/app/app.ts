import { Component, signal } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FormValidation } from "./components/form-validation/form-validation";
import { CommonModule } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [FormValidation],
  template: `<app-form-validation></app-form-validation>`,
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('FormValidation');
}
