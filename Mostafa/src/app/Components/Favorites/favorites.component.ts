import { Component, OnInit } from '@angular/core';
import { WishlistService } from './../../Services/wishlist.service';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent implements OnInit {
  wishlist: any[] = [];

  constructor(private wishlistService: WishlistService) {}

  ngOnInit() {
    this.wishlistService.wishlist$.subscribe((items) => (this.wishlist = items));
  }
  removeFromWishlist(id : string) {
    this.wishlistService.removeFromWishlist(id);
  }
  clearWishlist() {
    this.wishlistService.clearWishlist()
  }
}
