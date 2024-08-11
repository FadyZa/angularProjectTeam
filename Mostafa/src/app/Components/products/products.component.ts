import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {  ProductsService } from '../../Services/productsService.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategorySliderComponent } from '../category-slider/category-slider.component';
import { BrandSliderComponent } from './../brand-slider/brand-slider.component';
import { FavoritesComponent } from "../Favorites/favorites.component";
import { WishlistService } from '../../Services/wishlist.service';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    CategorySliderComponent,
    BrandSliderComponent,
    FavoritesComponent,
    DropdownModule,
    RouterModule
  ],

  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any = [];
  categories: any = [];
  @Output() item = new EventEmitter();

  constructor(
    private prod_service: ProductsService,
    private wishService: WishlistService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.prod_service.getAllProducts().subscribe({
      next: (res: any) => {
        console.log(res);
        this.products = res.data;
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Completed');
      },
    });

    this.prod_service.getAllCategories().subscribe({
      next: (res: any) => {
        console.log(res);
        this.categories = res.data;
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Completed');
      },
    });
  }
  filterCategory(event: any) {
    const value = event.target.value; // The selected value
    if (value === 'All') {
      this.prod_service.getAllProducts().subscribe((res: any) => {
        this.products = res.data;
      });
    } else {
      this.getProductByCategory(value);
    }
  }

  getProductByCategory(val: string) {
    this.prod_service.getProductsByCategory(val).subscribe((res: any) => {
      this.products = res.data;
    });
  }

  toggleWishlist(product: any) {
    if (this.isInWishList(product)) {
      this.wishService.removeFromWishlist(product);
    } else {
      this.wishService.addToWishlist(product);
    }
  }
  isInWishList(product: any) {
    return this.prod_service.isInWishlist(product);
  }
}

