import { Component } from '@angular/core';
import { PerfumeItemComponent } from '../perfume-item/perfume-item.component';
import { PerfumesService } from '../../services/perfumes.service';
import { Sex } from '../../enums/sex.enum';
import { ActivatedRoute } from '@angular/router';
import { PerfumeType } from '../../enums/perfume-type.enum';
import { Perfume } from '../../models/perfume.model';

@Component({
  selector: 'app-perfume-grid',
  standalone: true,
  imports: [PerfumeItemComponent],
  templateUrl: './perfume-grid.component.html',
  styleUrl: './perfume-grid.component.css'
})
export class PerfumeGridComponent {

  perfumes: Perfume[] = []
  filtredPerfumes: Perfume[] = [];
  perfumesSex!: Sex;
  perfumeType!: PerfumeType;

  constructor(private perfumeService: PerfumesService, private route: ActivatedRoute) {
    this.perfumeService.getAllPerfumes().subscribe(
      (perfumes) => {
        this.perfumes = perfumes;
        if (this.perfumeType && this.perfumesSex) {
          console.log(this.perfumeType, this.perfumesSex)
          this.filtredPerfumes = this.perfumes.filter((perfume) => perfume.sex == this.perfumesSex && perfume.type == this.perfumeType)
          console.log(this.filtredPerfumes)
        }
      })
    this.route.params.subscribe(params => {
      this.perfumesSex = params['sex'];
      this.perfumeType = params['perfumeType'];
      this.filtredPerfumes = this.perfumes.filter((perfume) => perfume.sex === this.perfumesSex && perfume.type == this.perfumeType)
    });
  }
}
