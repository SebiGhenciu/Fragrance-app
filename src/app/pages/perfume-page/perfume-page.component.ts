import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Perfume } from '../../models/perfume.model';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { PerfumesService } from '../../services/perfumes.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-perfume-page',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './perfume-page.component.html',
  styleUrl: './perfume-page.component.css'
})
export class PerfumePageComponent {
  constructor(private shoppingCartService: ShoppingCartService, private route: ActivatedRoute, private perfumeService: PerfumesService) {
    this.perfumeService.getAllPerfumes()
    .pipe(
      map((perfumes: Perfume[]) => perfumes.find((perfume: Perfume) => perfume.id === this.perfumeId))
    )
    .subscribe((perfume: any) => this.perfume = perfume)
}

  addItemToCart(perfume: Perfume) {
    this.shoppingCartService.addItem(perfume);
  }

  perfumeId! : string;
  perfume! : Perfume;
  allPerfume! : Perfume[];
  
  ngOnInit(){
    this.route.params.pipe().subscribe((params) => {
      console.log(params);
      this.perfumeId = params['perfumeId'];
    });
  }

}
