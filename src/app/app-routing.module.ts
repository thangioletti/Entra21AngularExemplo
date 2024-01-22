import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { PlaygroundComponent } from './playground/playground.component';

const routes: Routes = [
  { path: '', pathMatch: `full`, component: HomeComponent },
  { path: 'products', pathMatch: `full`, component: ProductsComponent },
  { path: 'user', pathMatch: `full`, component: UserComponent },
  { path: 'new-user', pathMatch: `full`, component: UserFormComponent },
  { path: 'update-user/:id', pathMatch: `full`, component: UserFormComponent },
  { path: 'playground', pathMatch: `full`, component: PlaygroundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
