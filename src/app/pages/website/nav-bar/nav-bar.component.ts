import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Sex } from '../../../enums/sex.enum';
import { PerfumeType } from '../../../enums/perfume-type.enum';
import { Note } from '../../../enums/notes.enum';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatIconModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  get Sex() {
    return Sex;
  }
  get PerfumeType() {
    return PerfumeType;
  }
  
  get Note() {
    return Note;
  } 
}
