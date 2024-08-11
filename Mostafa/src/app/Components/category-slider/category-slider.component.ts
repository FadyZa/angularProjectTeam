import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../Services/productsService.service';
import { CarouselModule } from 'primeng/carousel';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-category-slider',
  standalone: true,
  imports: [CarouselModule , RouterModule],

  templateUrl: './category-slider.component.html',
  styleUrl: './category-slider.component.scss',
})
export class CategorySliderComponent implements OnInit {
  categories: any[] = [];

  constructor(private prod_service: ProductsService) {}

  ngOnInit(): void {
    this.prod_service.getAllCategories().subscribe({
      next: (res: any) => {
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
}
