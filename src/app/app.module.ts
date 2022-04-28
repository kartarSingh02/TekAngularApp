import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CakeComponent } from './cake/cake.component';
import { SignupComponent } from './signup/signup.component';
import { CakelistComponent } from './cakelist/cakelist.component';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import { SearchComponent } from './search/search.component';
import { AddcakeComponent } from './addcake/addcake.component';
import { CartComponent } from './cart/cart.component';
import { HighlightsDirective } from './highlights.directive';
import { DiscountPipe } from './discount.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';

@NgModule({
  declarations: [
    AppComponent,NavbarComponent, LoginComponent, CarouselComponent, CakeComponent, SignupComponent, CakelistComponent, ForgotpasswordComponent, HomeComponent, PagenotfoundComponent, CakedetailsComponent, SearchComponent, AddcakeComponent, CartComponent, HighlightsDirective, DiscountPipe, CheckoutComponent, AddressComponent, PaymentComponent, MyordersComponent, PlaceorderComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
