import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// export interface Product {
//   id: string;
//   title: string;
//   price: number;
//   description: string;
//   images: string[] ;
//   rating: number;
//   stock: number;
//   sold: number;
//   createdAt: Date;
//   updatedAt: Date;
// } ;

//   export interface category: {
//     id: string;
//     name: string;
//     slug: string;
//   };

// export interface subcategory?: {
//     id: string;
//     name: string;
//     slug: string;
//   };

// export interface brand {
//     id: string;
//     name: string;
//   };
// export interface  ;


// export interface ProductList {
//   products: ProductList[];
// }

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private wishlistItems: any[] = [];

  api_url = 'https://ecommerce.routemisr.com/api/v1/products';
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get<any>(this.api_url);
  }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(
      'https://ecommerce.routemisr.com/api/v1/categories'
    );
  }

  getProductsByCategory(val: string): Observable<any> {
    return this.http.get<any>(
      `https://ecommerce.routemisr.com/api/v1/categories/${val}`
    );
  }

  addToWishList(product: any) {
    return this.http.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${product}`
    );
  }
  isInWishlist(product: any): boolean {
    return this.wishlistItems.some((item) => item.id === product.id);
  }
  getAllBrands(): Observable<any> {
    return this.http.get<any>('https://ecommerce.routemisr.com/api/v1/brands');
  }
  getProductsByBrand(brandId: string): Observable<any> {
    return this.http.get<any>(
      `https://ecommerce.routemisr.com/api/v1/brands/${brandId}`
    );
  }
  getDetailsOfProduct(id: string) {
    return this.http.get<any>(`${this.api_url}/${id}`)
  }
}

// https://ecommerce.routemisr.com/api/v1/brands/
