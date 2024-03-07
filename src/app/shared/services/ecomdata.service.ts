import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcomdataService {

  constructor(private _HttpClient:HttpClient) { }

// products
  getAllProducts():Observable<any>

  {

   return this._HttpClient.get ( `https://ecommerce.routemisr.com/api/v1/products` )
  
  } ;


// productDetails

  getProductDetails(id:string):Observable<any>
  {

   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  } ;

// categories
 getCategories():Observable<any>
 {
  return this._HttpClient.get( `https://ecommerce.routemisr.com/api/v1/categories` ) ;
 } ;


// Specific Categories
getSpecificCategories(id:any):Observable<any>
 {
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
 };








  
}
