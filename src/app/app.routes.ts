import { Routes } from '@angular/router';
import { authGuard } from '../../auth.guard';
// import {ProductsComponent} from "./pages/products/products.component"

export const routes: Routes = [
    // home route
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home",
        loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent)
    },

    {
        path: "product-details/:id",
        loadComponent: () => import("./pages/product-details/product-details.component").then(m => m.ProductDetailsComponent)
    },

    // other routes

    // {path:"products",canActivate:[authGuard],component:ProductsComponent}


];
