import { Component, Input, input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-perfume-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './perfume-item.component.html',
  styleUrl: './perfume-item.component.css'
})
export class PerfumeItemComponent {
@Input({required:true}) perfume :any

}
