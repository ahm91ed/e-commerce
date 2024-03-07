import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ForgetpasswordService } from 'src/app/shared/services/forgetpassword.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {

  constructor (private _ForgetpasswordService:ForgetpasswordService , private _Router:Router){}


  step1:boolean = true;
  step2:boolean = false;
  step3:boolean = false;
  email:string = "" ;
  userMessage:string = ''

  forgetform:FormGroup = new FormGroup({
    email : new FormControl ('')
  }) ;

  resetCodeform:FormGroup = new FormGroup({
    resetCode : new FormControl ('')
  }) ;

  
  resetPasswordform:FormGroup = new FormGroup({
    newPassword : new FormControl ('')
  }) ;

  forgetpassword():void
  {
    let userEmail= this.forgetform.value ;
    this.email = userEmail.email ;

    this._ForgetpasswordService.forgetPassword(userEmail).subscribe({
      next : (response)=>{

        console.log(response) ;

        this.userMessage = response.message ;
        this.step1 = false ;
        this.step2 = true ;

      
      } ,

      error: (err)=>{
        console.log(err);
        this.userMessage = err.error.message;
        
        
       
        
      }
        


    })

  };

  resetCode():void
  {
    let resetCode = this.resetCodeform.value ;
    this._ForgetpasswordService.resetCode(resetCode).subscribe ({
      next: (response)=>{
        console.log(response);
        this.userMessage = response.status ;
        this.step2 = false ;
        this.step3 = true ;


      } ,
      error: (err)=>{
        console.log(err);
        this.userMessage = err.error.message;
        
        

        
      }
    })

  } ;

  newPassword():void
  {
    let resetform = this.resetPasswordform.value ;
    resetform.email = this.email
    this._ForgetpasswordService.resetPassword(resetform).subscribe({
      next: (response)=>{
        console.log(response) ;

        if(response.token){
          localStorage.setItem ( 'eToken' , response.token) ;
          this._Router.navigate ( ['/home'] )
        }

      },

      error: (err)=>{
        console.log(err) ;
        this.userMessage = err.error.message;
        
      }
    })

  }




}
