import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, ModalComponent } from '@shared/components';
import { ModalEventBusService } from '@shared/components/modal/modal.event-bus.service';

const NG_IMPORTS = [ReactiveFormsModule];
const IMPORTS = [ButtonComponent, ModalComponent];

@Component({
  selector: 'app-home-reservations',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './home-reservations.component.html',
  styleUrl: './home-reservations.component.scss',
})
export class HomeReservationsComponent {
  // DI
  private readonly fb = inject(FormBuilder);
  private readonly modalEventBusService = inject(ModalEventBusService);
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

    this.modalEventBusService.openModal();
  }
}
