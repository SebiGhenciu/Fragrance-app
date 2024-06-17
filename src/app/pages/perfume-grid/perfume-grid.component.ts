import { Component } from '@angular/core';
import { PerfumeItemComponent } from '../perfume-item/perfume-item.component';
import { PerfumesService } from '../../services/perfumes.service';

@Component({
  selector: 'app-perfume-grid',
  standalone: true,
  imports: [PerfumeItemComponent],
  templateUrl: './perfume-grid.component.html',
  styleUrl: './perfume-grid.component.css'
})
export class PerfumeGridComponent {

  perfumes: any = []

  constructor(private perfumeService: PerfumesService) {
    this.perfumeService.getAllPerfumes().subscribe(
      (perfumes) => {
        this.perfumes = perfumes;
        console.log(perfumes);
      })
  }
}
