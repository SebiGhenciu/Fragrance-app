import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Sex } from '../../../enums/sex.enum';
import { PerfumeType } from '../../../enums/perfume-type.enum';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  get Sex() {
    return Sex;
  }

  get PerfumeType() {
    return PerfumeType;
  }
}
