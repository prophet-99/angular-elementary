import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const NG_IMPORTS = [ReactiveFormsModule];

@Component({
  selector: 'app-home-reservations',
  imports: [...NG_IMPORTS],
  templateUrl: './home-reservations.component.html',
  styleUrl: './home-reservations.component.scss',
})
export class HomeReservationsComponent {
  // DI
  private readonly fb = inject(FormBuilder);
  // LOCALE
  reservationForm!: FormGroup;

  constructor() {
    this.reservationForm = this.fb.group({
      dateReservation: ['2025-09-25', [Validators.required]],
      timeReservation: ['20:00', [Validators.required]],
    });
  }

  onReserve() {
    if (this.reservationForm.invalid) return;

    console.log(this.reservationForm.value);
  }
}
