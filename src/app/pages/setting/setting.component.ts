import { Component } from '@angular/core';
import { AddressComponent } from "../../shared/address/address.component";
import { ChangePassComponent } from "../change-pass/change-pass.component";

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [AddressComponent, ChangePassComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
