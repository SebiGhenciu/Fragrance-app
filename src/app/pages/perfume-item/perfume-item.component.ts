import { Component, Input, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import { Perfume } from '../../models/perfume.model';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-perfume-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatDividerModule, MatIconModule, RouterLink],
  templateUrl: './perfume-item.component.html',
  styleUrl: './perfume-item.component.css',
})
export class PerfumeItemComponent {
  @Input({ required: true }) perfume: any;

  constructor(private shoppingCartService: ShoppingCartService) {}
  addItemToCart(perfume: Perfume) {
    this.shoppingCartService.addItem(perfume);
  }
}
