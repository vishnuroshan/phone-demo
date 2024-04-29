import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-phone-input';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'phone-demo';
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      phone: [''],
    });

    this.form.get('phone')?.valueChanges.subscribe((val) => {
      console.log(val, this.form.controls['phone'].errors);
    });
  }
}
