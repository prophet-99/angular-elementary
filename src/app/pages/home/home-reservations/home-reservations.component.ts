import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent, ModalComponent } from '@shared/components';
import { ModalEventBusService } from '@shared/components/modal/modal.event-bus.service';

const NG_IMPORTS = [ReactiveFormsModule, CommonModule];
const IMPORTS = [ButtonComponent, ModalComponent];

@Component({
  selector: 'app-home-reservations',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './home-reservations.component.html',
  styleUrl: './home-reservations.component.scss',
})
export class HomeReservationsComponent implements OnInit {
  // DI
  private readonly fb = inject(FormBuilder);
  private readonly modalEventBusService = inject(ModalEventBusService);
  // LOCALE
  reservationForm!: FormGroup;
  modalReservationForm!: FormGroup;

  constructor() {
    this.reservationForm = this.fb.group({
      dateReservation: ['2025-09-25', [Validators.required]],
      timeReservation: ['20:00', [Validators.required]],
    });

    this.modalReservationForm = this.fb.group({
      dateReservation: [
        this.reservationForm.get('dateReservation')?.value,
        [Validators.required],
      ],
      timeReservation: [
        this.reservationForm.get('timeReservation')?.value,
        [Validators.required],
      ],
      fullName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.min(1)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      numberSeats: [
        0,
        [Validators.required, Validators.min(1), Validators.max(4)],
      ],
    });
  }

  ngOnInit(): void {
    // TODO: EVITAR MEMORY LEAKS
    this.reservationForm.valueChanges.subscribe(
      ({ dateReservation, timeReservation }) => {
        this.modalReservationForm.patchValue({
          dateReservation,
          timeReservation,
        });
      }
    );

    this.modalReservationForm.valueChanges.subscribe(
      ({ dateReservation, timeReservation }) => {
        this.reservationForm.patchValue({
          dateReservation,
          timeReservation,
        });
      }
    );
  }

  onReserve() {
    if (this.reservationForm.invalid) return;

    console.log(this.reservationForm.value);

    this.modalEventBusService.openModal();
  }
}
