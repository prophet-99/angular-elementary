import { Component, inject } from '@angular/core';
import {
  ControlContainer,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css',
})
export class AddressComponent {
  private controlContainer = inject(ControlContainer);
  form = this.controlContainer.control?.get('address') as FormGroup;

  ngOnInit(): void {
    this.form.valueChanges.subscribe(() => {
      console.log('Address Form Value Changed:', this.form);
    });
  }
}
