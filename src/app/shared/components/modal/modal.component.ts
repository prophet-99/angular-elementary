import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { ModalEventBusService } from './modal.event-bus.service';
import { ButtonComponent } from '../button/button.component';

const NG_IMPORTS = [AsyncPipe];
const IMPORTS = [ButtonComponent];

@Component({
  selector: 'app-modal',
  imports: [...NG_IMPORTS, ...IMPORTS],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss',
})
export class ModalComponent {
  // DI
  readonly modalEventBusService = inject(ModalEventBusService);
}
