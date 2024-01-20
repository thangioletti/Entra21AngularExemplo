import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  { path: '', pathMatch: `full`, component: HomeComponent },
  { path: 'products', pathMatch: `full`, component: ProductsComponent },
  { path: 'user', pathMatch: `full`, component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
