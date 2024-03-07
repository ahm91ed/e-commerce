import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrls: ['./blank-navbar.component.css']
})
export class BlankNavbarComponent implements OnInit {

  constructor ( private _AuthenticationService:AuthenticationService , private _CartService:CartService ,  private _Router:Router){}


  cartNum:number = 0 ;

  ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next: (data)=>{
        // console.log(data);
        this.cartNum = data ;
      }
    }) ;


    this._CartService.getUserCart().subscribe({
      next :(response)=>{
        this.cartNum = response.numOfCartItems ;
      }
    })





  }

  logOutUser(){

    this._AuthenticationService.logOut() ;

  }

}
