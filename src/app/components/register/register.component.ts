import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {



  constructor( private _AuthenticationService:AuthenticationService , private _Router:Router , private _FormBuilder:FormBuilder ){}

 registerSubscribe :Subscription = new Subscription ;

  errorMessage:string = '' ;

  isLoading:boolean = false ;  //spinner hidden 



   registerform:FormGroup = new FormGroup({

     name: new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)  ]) ,

    email: new FormControl(null , [Validators.required , Validators.email  ]) ,

     password: new FormControl(null , [Validators.required , Validators.pattern( /^[A-Za-z0-9]{6,20}$/ )  ] ) ,

     rePassword: new FormControl(null) ,

     phone: new FormControl(null , [Validators.required , Validators.pattern (/^01[0125][0-9]{8}$/) ] ) ,




   } , { validators : [  this.confirmPassword     ] } as FormControlOptions ) ;


// registerform:FormGroup = this._FormBuilder.group({

//   name: [  '' , [Validators.required , Validators.minLength(3) , Validators.maxLength(20)  ] ] ,

//   email : [ '' , [Validators.required , Validators.email  ] ] , 

//   password : [ '' , [Validators.required , Validators.pattern( /^[A-Za-z0-9]{6,20}$/ )  ] ] , 

//   rePassword : [ ''  ] , 

//   phone : [ '' , [Validators.required , Validators.pattern (/^01[0125][0-9]{8}$/) ] ]


// }  ,  { Validators : [ this.confirmPassword] } as FormControlOptions )  ;


confirmPassword( group:FormGroup):void

{

  let password = group.get('password') ;

  let rePassword = group.get('rePassword') ;

  if( rePassword?.value == null || rePassword?.value == '' ){

    rePassword?.setErrors({required:true})

  }

  else if( password?.value !=  rePassword?.value ){

    rePassword?.setErrors({mismatch:true})

  }





}




handleForm():void
{
 console.log( this.registerform.value) ;

 this.isLoading = true ;

 if ( this.registerform.valid == true ){

 this.registerSubscribe =  this._AuthenticationService.setRegister(this.registerform.value).subscribe({

    next: (response)=>{
      console.log(response) ;
  
      // 7Helw

      if ( response.message == 'success' ){

        this._Router.navigate( [ '/login' ] ,  ) ;

        this.isLoading = false ;



      }
  
    } ,
  
    error : (err: HttpErrorResponse)=>{
  
      console.log(err) ;
  
      // wehsh

      this.errorMessage = err.error.message;

      this.isLoading = false ;

      

      

      }
    
  
   }) ;

 }

 else {
  this.registerform.markAllAsTouched() ;
 }

 
}


ngOnDestroy(): void {

  this.registerSubscribe.unsubscribe() ;
  
}











}
