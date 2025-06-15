import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, RouterModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    address: this.formBuilder.group({
      city: [''],
      street: [''],
      homeNumber: ['', [Validators.required]],
    }),
    creditCard: this.formBuilder.group({
      cardNumber: [''],
      ccvNumber: [''],
      expirationDate: [''],
    }),
  });
}
