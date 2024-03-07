import { AuthenticationLayoutComponent } from './components/authentication-layout/authentication-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { authGuard } from './shared/guards/auth.guard';
import { DetailsComponent } from './components/details/details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { CategoriesDetailsComponent } from './components/categories-details/categories-details.component';

const routes: Routes = [

  {  path: '' ,

  canActivate: [ authGuard ] ,
  
  component: BlankLayoutComponent , children: [

    {  path: '' , redirectTo: 'home' , pathMatch: 'full' } ,

    {  path: 'home' , component: HomeComponent , title: 'home' } ,

    {  path: 'cart' , component: CartComponent , title: 'cart' } ,

    {  path: 'brands' , component: BrandsComponent , title: 'brands' } ,

    {  path: 'wishlist' , component: WishlistComponent , title: 'wishlist' } ,

    {  path: 'allorders' , component: AllordersComponent , title: 'allorders' } ,

    {  path: 'products' , component: ProductsComponent , title: 'products' } ,

    {  path: 'checkout/:id' , component: CheckoutComponent , title: 'checkout' } ,

    {  path: 'details/:id' , component: DetailsComponent , title: 'details' } ,

    {  path: 'categories' , component: CategoriesComponent , title: 'categories' } ,

    {  path: 'categoriesdetails/:id' , component: CategoriesDetailsComponent , title: 'categoriesdetails' } ,




  ] } ,


  {  path: '' , component: AuthenticationLayoutComponent ,children : [

    {  path: 'login' , component: LoginComponent , title: 'login' } ,

    {  path: 'register' , component: RegisterComponent , title: 'register' } ,

    {  path: 'forgetpassword' , component: ForgetpasswordComponent , title: 'forgetpassword' } ,





  ] } ,


{ path: '**' , component: NotfoundComponent , title : 'notfound' } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
