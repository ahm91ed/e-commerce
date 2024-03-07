import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private _AuthenticationService:AuthenticationService , private _Router:Router , private _FormBuilder:FormBuilder ){}



  errorMessage:string = '' ;

  isLoading:boolean = false ;  //spinner hidden 



  // loginForm:FormGroup = new FormGroup({


  //   email: new FormControl(null , [Validators.required , Validators.email  ]) ,

  //   password: new FormControl(null , [Validators.required , Validators.pattern( /^[A-Za-z0-9]{6,20}$/ )  ] ) ,

   




  // }) ;


  loginForm : FormGroup = this._FormBuilder.group ({

    email: [null , [Validators.required , Validators.email  ] ] ,

    password : [null , [Validators.required , Validators.pattern( /^[A-Za-z0-9]{6,20}$/ )  ]]




  })



handleForm():void
{
//  console.log( this.loginForm.value) ;

 this.isLoading = true ;

 if ( this.loginForm.valid == true ){

  this._AuthenticationService.setLogin(this.loginForm.value).subscribe({

    next: (response)=>{
  
      // 7Helw

      if ( response.message == 'success' ){

        this.isLoading = false ;

        
        localStorage.setItem ( `eToken` , response.token) ;

        this._AuthenticationService.saveUserData() ;

        console.log ( response) ;


        this._Router.navigate( [ '/home' ] ,  ) ;




      }
  
    } ,
  
    error : (err: HttpErrorResponse)=>{
  
      console.log(err) ;
  
      // we7hsh

      this.errorMessage = err.error.message;

      this.isLoading = false ;

      

      

      }
    
  
   })

 }

 else{
  this.loginForm.markAllAsTouched() ;
 }

 



} 


  

}
