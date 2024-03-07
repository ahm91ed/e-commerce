import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductsComponent } from './components/products/products.component';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DetailsComponent } from './components/details/details.component';
import { BlankNavbarComponent } from './components/blank-navbar/blank-navbar.component';
import { AuthenticationNavbarComponent } from './components/authentication-navbar/authentication-navbar.component';
import { BlankLayoutComponent } from './components/blank-layout/blank-layout.component';
import { AuthenticationLayoutComponent } from './components/authentication-layout/authentication-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http' ;
import {BrowserAnimationsModule} from '@angular/platform-browser/animations' ;
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuyPipe } from './buy.pipe';
import { TermPipe } from './term.pipe';
import { SearchPipe } from './search.pipe';
import { CurrencyPipe } from './currency.pipe';
import { ToastrModule } from 'ngx-toastr';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { AllordersComponent } from './components/allorders/allorders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ForgetpasswordComponent } from './components/forgetpassword/forgetpassword.component';
import { MyHttpInterceptor } from './shared/interceptors/my-http.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './shared/interceptors/loading.interceptor';
import { CategoriesDetailsComponent } from './components/categories-details/categories-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CartComponent,
    NotfoundComponent,
    ProductsComponent,
    BrandsComponent,
    CategoriesComponent,
    LoginComponent,
    RegisterComponent,
    DetailsComponent,
    BlankNavbarComponent,
    AuthenticationNavbarComponent,
    BlankLayoutComponent,
    AuthenticationLayoutComponent,
    BuyPipe,
    TermPipe,
    SearchPipe,
    CurrencyPipe,
    CheckoutComponent,
    AllordersComponent,
    WishlistComponent,
    ForgetpasswordComponent,
    CategoriesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ReactiveFormsModule ,
    HttpClientModule ,  
    BrowserAnimationsModule ,
    CarouselModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule ,


  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass: MyHttpInterceptor , multi:true} ,
    { provide : HTTP_INTERCEPTORS , useClass: LoadingInterceptor , multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
