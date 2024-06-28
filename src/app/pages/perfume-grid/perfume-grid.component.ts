import { Component } from '@angular/core';
import { PerfumeItemComponent } from '../perfume-item/perfume-item.component';
import { PerfumesService } from '../../services/perfumes.service';
import { Sex } from '../../enums/sex.enum';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PerfumeType } from '../../enums/perfume-type.enum';
import { Perfume } from '../../models/perfume.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Note } from '../../enums/notes.enum';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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
  get Note() {
    return Note;
  }

  perfumes: Perfume[] = [];
  filtredPerfumes: Perfume[] = [];
  perfumesSex!: Sex;
  perfumeType!: PerfumeType;
  perfumeName!: string;
  perfumeNote!: Note;

  constructor(
    private perfumeService: PerfumesService,
    private route: ActivatedRoute
  ) {
    this.perfumeService.getAllPerfumes().subscribe((perfumes) => {
      this.perfumes = perfumes;

      if (this.perfumeName) {
        this.searchByName();
      }
      this.searchByFilters();
    });
    this.route.params.pipe(takeUntilDestroyed()).subscribe((params) => {
      console.log(params);
      this.perfumesSex = params['sex'];
      this.perfumeType = params['perfumeType'];
      this.perfumeName = params['name'];
      this.perfumeNote = params['note'];
      this.searchByFilters();
    });
  }

  private searchByFilters() {
    if (this.perfumeType == PerfumeType.All) {
      console.log(this.perfumeNote )
      this.filtredPerfumes = this.perfumes.filter(
        (perfume) => perfume.sex == this.perfumesSex
      );
    }
    if (this.perfumeType && this.perfumesSex) {
      this.filtredPerfumes = this.perfumes.filter(
        (perfume) =>
          perfume.sex == this.perfumesSex && perfume.type == this.perfumeType
      );
    }
    if (this.perfumeNote !== Note.Undefined) {
      this.filtredPerfumes = this.perfumes.filter(
        (perfume) =>
          perfume.sex == this.perfumesSex &&
          perfume.notes.some((note) => note == this.perfumeNote)
      );
    }
  }

  private searchByName() {
    this.filtredPerfumes = this.perfumes.filter(
      (perfume) =>
        perfume.name.toLowerCase().indexOf(this.perfumeName.toLowerCase()) !==
        -1
    );
  }
}
