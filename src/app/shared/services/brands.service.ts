import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor( private _HttpClient:HttpClient) { }

  baseUrl:any = `https://ecommerce.routemisr.com` ;

  getBrands():Observable<any>
  {
    return this._HttpClient.get( this.baseUrl +  `/api/v1/brands` )
  }
}
