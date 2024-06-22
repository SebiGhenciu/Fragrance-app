import { Component } from '@angular/core';
import { PerfumeItemComponent } from '../perfume-item/perfume-item.component';
import { PerfumesService } from '../../services/perfumes.service';
import { Sex } from '../../enums/sex.enum';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PerfumeType } from '../../enums/perfume-type.enum';
import { Perfume } from '../../models/perfume.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-perfume-grid',
  standalone: true,
  imports: [PerfumeItemComponent, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './perfume-grid.component.html',
  styleUrl: './perfume-grid.component.css',
})
export class PerfumeGridComponent {
  get Sex() {
    return Sex;
  }
  get PerfumeType() {
    return PerfumeType;
  }

  perfumes: Perfume[] = [];
  filtredPerfumes: Perfume[] = [];
  perfumesSex!: Sex;
  perfumeType!: PerfumeType;
  perfumeName!: string;

  constructor(
    private perfumeService: PerfumesService,
    private route: ActivatedRoute
  ) {
    this.perfumeService.getAllPerfumes().subscribe((perfumes) => {
      this.perfumes = perfumes;

      if (this.perfumeName) {
        this.filtredPerfumes = this.perfumes.filter(
          (perfume) =>
            perfume.name
              .toLowerCase()
              .indexOf(this.perfumeName.toLowerCase()) !== -1
        );
      }
      if (this.perfumeType == PerfumeType.All) {
        this.filtredPerfumes = this.perfumes.filter(
          (perfume) => perfume.sex == this.perfumesSex
        );
      } else {
        if (this.perfumeType && this.perfumesSex) {
          this.filtredPerfumes = this.perfumes.filter(
            (perfume) =>
              perfume.sex == this.perfumesSex &&
              perfume.type == this.perfumeType
          );
        }
      }
    });
    this.route.params.subscribe((params) => {
      this.perfumesSex = params['sex'];
      this.perfumeType = params['perfumeType'];
      this.perfumeName = params['name'];
    });
  }
}
