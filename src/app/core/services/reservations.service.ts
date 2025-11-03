import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment.development';
import { type Reservation } from '@core/models/reservation.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  // DI
  private readonly http = inject(HttpClient);
  //LOCALE
  baseURL = `${environment.baseApiUrlReservations}/reservations`;

  createReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.baseURL, reservation);
  }
}
