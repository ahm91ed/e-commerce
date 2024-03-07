import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor( private _HttpClient:HttpClient) { }



  addToWishlist(wishlistId:any):Observable<any>
  
  {
    return this._HttpClient.post( `https://ecommerce.routemisr.com/api/v1/wishlist` ,

    { productId:   wishlistId} ,
    )

  } ;

  getWishlist():Observable<any>
  {
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/wishlist` )

  } ;


  deleteWishlist(prodId:string):Observable<any>
  {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}` )

  }






}
