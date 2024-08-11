import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
 
  private storedWishlistKey = 'wishlistItems';
 
  private wishListSub = new BehaviorSubject<any[]>(
    this.getWishlistFromStorage()
  );
  wishlist$ = this.wishListSub.asObservable();

   //------------------
  constructor() {}

  private getWishlistFromStorage() {
    if (typeof localStorage !== 'undefined') {
      const wishlist = localStorage.getItem(this.storedWishlistKey);
      return wishlist ? JSON.parse(wishlist) : [];
    } else {
      return []; 
    }
  }

  //----------

  private updateLocalStorage(items: any[]): void {
    localStorage.setItem(this.storedWishlistKey, JSON.stringify(items));
  }

  addToWishlist(product: any) {
    const currItems = this.wishListSub.value;
    const updatedItems = [...currItems, product];
    this.wishListSub.next(updatedItems);
    this.updateLocalStorage(updatedItems);
  }

  removeFromWishlist(product: any) {
    const updatedItems = this.wishListSub.value.filter(
      (item) => item.id !== product.id
    );
    this.wishListSub.next(updatedItems);
    this.updateLocalStorage(updatedItems);
  }

  clearWishlist() {
    this.wishListSub.next([]);
    this.updateLocalStorage([]);
  }
}