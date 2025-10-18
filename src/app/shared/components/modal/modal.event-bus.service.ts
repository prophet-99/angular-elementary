import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root', //* SINGLETON
})
export class ModalEventBusService {
  // With observables
  private modalSubject = new BehaviorSubject(false);
  modalState$ = this.modalSubject.asObservable();

  // With signals
  private modalSignal = signal(false);
  modalState = this.modalSignal.asReadonly();

  openModal() {
    this.modalSubject.next(true);
  }

  openModalWithSignal() {
    this.modalSignal.set(true);
  }

  closeModal() {
    this.modalSubject.next(false);
  }

  closeModalWithSignal() {
    this.modalSignal.set(false);
  }
}
