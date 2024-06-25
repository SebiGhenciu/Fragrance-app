import { Component } from '@angular/core';
import { ShoppingCartService } from '../../../services/shopping-cart.service';
import { Perfume } from '../../../models/perfume.model';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  perfumes: Perfume[] = [];
  totalPrice: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {
    this.perfumes = this.shoppingCartService.getShoppingCart();
    this.updatePerfumes();
    this.totalPrice = this.shoppingCartService.getTotalPrice();
  }

  ngOnInit() {
  }

  updatePerfumes() {
    const shoppingCartItems = this.shoppingCartService.getShoppingCart();
    let updatedPerfumes: any[] = [];

    shoppingCartItems.forEach((item) => {
      const existingItem = updatedPerfumes.find((p) => p.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        updatedPerfumes.push({ ...item, quantity: 1 });
      }
    });

    this.perfumes = updatedPerfumes;
  }

  checkWrap(isChecked: boolean) {
    if (isChecked) {
      this.totalPrice += 26;
    } else {
      this.totalPrice -= 26;
    }
  }

  checkEcoWrap(isChecked: boolean) {
    if (isChecked) {
      this.totalPrice += 5;
    } else {
      this.totalPrice -= 5;
    }
  }

  checkWaranty(isChecked: boolean) {
    if (isChecked) {
      this.totalPrice += 4;
    } else {
      this.totalPrice -= 4;
    }
  }

  deletePerfume(removedPerfume: Perfume) {
    this.shoppingCartService.removeItem(removedPerfume);
    this.perfumes = this.perfumes.filter(
      (perfume) => perfume.id !== removedPerfume.id
    );
    this.totalPrice -= removedPerfume.quantity * removedPerfume.price;
  }
}
