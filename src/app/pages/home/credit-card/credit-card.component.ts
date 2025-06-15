import { Component, inject, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-credit-card',
  imports: [ReactiveFormsModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.css',
})
export class CreditCardComponent implements OnInit {
  private controlContainer = inject(ControlContainer);
  form = this.controlContainer.control?.get('creditCard') as FormGroup;

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      console.log('Credit Card Form Value Changed:', this.form.value);
    });
  }
}
