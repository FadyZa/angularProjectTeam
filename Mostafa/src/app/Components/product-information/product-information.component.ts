import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/productsService.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CategorySliderComponent } from "../category-slider/category-slider.component";

@Component({
  selector: 'app-product-information',
  standalone: true,
  imports: [RouterModule, CategorySliderComponent],
  templateUrl: './product-information.component.html',
  styleUrl: './product-information.component.scss',
})
export class ProductInformationComponent implements OnInit{
  id: any; 
  product: any[] = [];

  constructor(private prod_service: ProductsService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get("id")
    console.log(this.id)
  }
ngOnInit(): void {
    this.getDetailsOfProduct()
}
  getDetailsOfProduct() {
    this.prod_service.getDetailsOfProduct(this.id).subscribe((res: any) => {
      this.product = res.data;
    });
  }
}
