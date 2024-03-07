import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private _HttpClient:HttpClient , private _Router:Router) { }

  logOut():void  {

    localStorage.removeItem( `eToken` ) ;

    this._Router.navigate(  [ `/login` ]   ) ;



  } ;


  userData: any ;


  saveUserData(){



    if (     localStorage.getItem ( `eToken` ) != null  ) { // Token founded

      let encodeToken:any = localStorage.getItem ( `eToken` ) ;

     let decodeToken =  jwtDecode ( encodeToken ) ;

       console.log ( decodeToken ) ;

       this.userData = decodeToken ;

    }



  } ;


  setRegister(  userData:object  ):Observable<any>

  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup` , userData )

  } ;

  setLogin(  userData:object  ):Observable<any>

  {
    return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin` , userData )

  }



}
