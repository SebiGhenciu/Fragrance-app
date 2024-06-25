import { Injectable } from '@angular/core';
import { Perfume } from '../models/perfume.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  shoppingCart: Perfume[] = [];
  totalPrice: number = 0;
  shoppingCartKey = 'shoppingCart';
  totalPriceKey = 'totalPrice';

  constructor(private cookieService: CookieService) {
    if (this.cookieExists()) {
      this.shoppingCart = this.getShoppingCartFromCookies();
      this.totalPrice = this.getTotalPriceFromCookies();
    }
  }

  getShoppingCart(){
    return this.shoppingCart;
  }

  getTotalPrice(){
    return this.totalPrice;
  }

  addItem(perfume: Perfume) {
    this.shoppingCart.push(perfume);
    this.totalPrice += perfume.price;
    this.setShoppingCartInCookies();
  }

  removeItem(removedPerfume: Perfume) {
    this.shoppingCart = this.shoppingCart.filter(
      (perfume) => perfume.id !== removedPerfume.id
    );
    this.totalPrice -= removedPerfume.price
    this.setShoppingCartInCookies();
  }

  clearShoppingCookies() {
    this.cookieService.delete(this.shoppingCartKey);
    this.cookieService.delete(this.totalPriceKey);
  }

  setShoppingCartInCookies() {
    const jsonShopping = JSON.stringify(this.shoppingCart);
    const jsonTotalPrice = JSON.stringify(this.totalPrice);
    this.cookieService.set(this.shoppingCartKey, jsonShopping);
    this.cookieService.set(this.totalPriceKey, jsonTotalPrice);
  }

  cookieExists(): boolean {
    return this.cookieService.check(this.shoppingCartKey);
  }

  getShoppingCartFromCookies(): any {
    const jsonString = this.cookieService.get(this.shoppingCartKey);
    return JSON.parse(jsonString);
  }

  getTotalPriceFromCookies(): any {
    const jsonString = this.cookieService.get(this.totalPriceKey);
    return JSON.parse(jsonString);
  }
}
