import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Subscription } from 'rxjs';

import { ReservationsService } from '@core/services/reservations.service';
import { reservationEntityToModel } from '@core/models/mappers/reservation.mapper';
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
  private readonly reservationsService = inject(ReservationsService);
  private destroyRef = inject(DestroyRef);
  // LOCALE
  reservationForm!: FormGroup;
  modalReservationForm!: FormGroup;
  mySuscription!: Subscription;

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
    this.reservationForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ dateReservation, timeReservation }) => {
        this.modalReservationForm.patchValue(
          {
            dateReservation,
            timeReservation,
          },
          { emitEvent: false }
        );
      });

    this.modalReservationForm.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ dateReservation, timeReservation }) => {
        this.reservationForm.patchValue(
          {
            dateReservation,
            timeReservation,
          },
          { emitEvent: false }
        );
      });
  }

  onReserve() {
    if (this.reservationForm.invalid) return;
    this.modalEventBusService.openModal();
  }

  saveReservation() {
    if (this.modalReservationForm.invalid) return;

    const reservationMapped = reservationEntityToModel(
      this.modalReservationForm.value
    );

    this.reservationsService.createReservation(reservationMapped).subscribe({
      next: (reservation) => {
        alert('Reservation created successfully!');
        console.log(reservation);

        this.modalEventBusService.closeModal();
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
