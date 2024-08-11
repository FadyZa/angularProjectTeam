import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { FavoritesComponent } from './Components/Favorites/favorites.component';
import { ProductInformationComponent } from './Components/product-information/product-information.component';

export const routes: Routes = [
  {path:'', redirectTo : 'home' , pathMatch : 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'favorite', component: FavoritesComponent },
  {path:'details/:id' , component:ProductInformationComponent}
];
