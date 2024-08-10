import { Component, inject, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-prod-card',
  standalone: true,
  imports: [NgForOf, RouterLink, MatIconModule],
  templateUrl: './prod-card.component.html',
  styleUrl: './prod-card.component.css'
})
export class ProdCardComponent {
  router = inject(Router);

  @Input() products: any;

  getStarsCount(rate: number) {
    return new Array(Math.floor(rate));
  }


  goToDetails(id: number) {
    console.log(id);
    this.router.navigate(["product-details/", id])
  }

}
