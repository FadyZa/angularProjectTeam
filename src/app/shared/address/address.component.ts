import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {

  userSettings = new FormGroup({
    address: new FormArray([
      new FormGroup(
        {
          street: new FormControl('', [Validators.required, Validators.minLength(3)]),
          city: new FormControl('', [Validators.required, Validators.minLength(3)]),
          state: new FormControl('', [Validators.required, Validators.minLength(2)]),
          details: new FormControl('', [Validators.required, Validators.minLength(3)]),
          zip: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]),
        }
      )
    ])
  }
  );



  get addressArray() {
    return this.userSettings.get("address") as FormArray;
  }

  addAddress() {
    this.addressArray.push(new FormGroup({
      street: new FormControl('', [Validators.required, Validators.minLength(3)]),
      city: new FormControl('', [Validators.required, Validators.minLength(3)]),
      state: new FormControl('', [Validators.required, Validators.minLength(2)]),
      details: new FormControl('', [Validators.required, Validators.minLength(3)]),
      zip: new FormControl('', [Validators.required, Validators.pattern('[0-9]{5}')]),
    }));
    console.log(this.addressArray);
  }

  removeAddress(index: number) {
    this.addressArray.removeAt(index);
  }

}
