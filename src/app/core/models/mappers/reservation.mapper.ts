import { type Reservation } from '../reservation.model';

export interface ReservationEntity {
  dateReservation: string;
  timeReservation: string;
  fullName: string;
  lastName: string;
  age: number;
  address: string;
  email: string;
  numberSeats: number;
}

export const reservationEntityToModel = (
  entity: ReservationEntity
): Reservation => {
  return {
    reservationDate: entity.dateReservation,
    reservationHour: entity.timeReservation,
    name: entity.fullName,
    lastName: entity.lastName,
    age: entity.age,
    address: entity.address,
    email: entity.email,
    ticketNumber: entity.numberSeats,
  } as Reservation;
};
