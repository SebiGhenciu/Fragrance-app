import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Sex } from '../../../enums/sex.enum';
import { PerfumeType } from '../../../enums/perfume-type.enum';
import { Note } from '../../../enums/notes.enum';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, MatIconModule, FormsModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
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

  perfumeName = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  searchPerfumes() {
   
    window.location.href = '/perfume/' + this.perfumeName;
  }
}
