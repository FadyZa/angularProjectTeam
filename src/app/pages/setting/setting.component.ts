import { Component } from '@angular/core';
import { AddressComponent } from "../../shared/address/address.component";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [AddressComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
