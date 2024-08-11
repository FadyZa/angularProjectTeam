import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../Services/productsService.service';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-brand-slider',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './brand-slider.component.html',
  styleUrl: './brand-slider.component.scss',
})
export class BrandSliderComponent implements OnInit {
  brands: any[] = [];

  constructor(private prod_service: ProductsService) {}

  ngOnInit(): void {
    this.prod_service.getAllBrands().subscribe({
      next: (res: any) => {
        this.brands = res.data;
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Completed');
      },
    });
  }
  getProductByBrand(brandId: string) {
    this.prod_service.getProductsByBrand(brandId).subscribe({
      next: (res: any) => {
        this.brands = res.data;
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('Completed');
      },
    });
  }
}
