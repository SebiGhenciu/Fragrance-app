import { Component, Input } from "@angular/core";
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { Sex } from '../../../enums/sex.enum';
import { PerfumeType } from '../../../enums/perfume-type.enum';


@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  /* @Input() slides; */

  get Sex() {
    return Sex;
  }

  get PerfumeType() {
    return PerfumeType;
  }
}
