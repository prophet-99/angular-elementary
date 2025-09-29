import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '@shared/components/button/button.component';

const NG_IMPORTS = [ReactiveFormsModule];
const IMPORTS = [ButtonComponent];

@Component({
  selector: 'app-home-reservations',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './home-reservations.component.html',
  styleUrl: './home-reservations.component.scss',
})
export class HomeReservationsComponent {
  // DI
  private readonly fb = inject(FormBuilder);
  // LOCALE
  reservationForm!: FormGroup;
  showModal = false;

  constructor() {
    this.reservationForm = this.fb.group({
      dateReservation: ['2025-09-25', [Validators.required]],
      timeReservation: ['20:00', [Validators.required]],
    });

    // TODO: Only demostrative
    setTimeout(() => {
      this.showModal = true;
    }, 3_000);
  }

  onReserve() {
    if (this.reservationForm.invalid) return;

    console.log(this.reservationForm.value);
  }
}
