import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { NgForOf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LoaderComponent } from "../../shared/loader/loader.component";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgForOf, RouterLink, LoaderComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  id!: number;
  product!: any;

  activeRoute = inject(ActivatedRoute);

  constructor(private _productService: ProductsService) {
    this.activeRoute.params.subscribe((params) => {
      this.id = params["id"];
      this._productService.getProductById(this.id).subscribe({
        next: (res) => {
          this.product = res.data;
        },
        error: (err) => {
          console.log(err);
        }
      })

    })
  }

  getStarsCount(rate: number) {
    return new Array(Math.floor(rate));
  }


}
