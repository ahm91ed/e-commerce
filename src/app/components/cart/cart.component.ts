import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private _CartService:CartService){}

cartDetails:any = null ;
CartItems :any ={} ;

  removeCartItem(id:string):void
  {
    this._CartService.removeItem(id).subscribe({

      next: (response)=>{


        this.cartDetails = response.data ;

        this._CartService.cartNumber.next(response.numOfCartItems) ;



      },

      error: (err)=>{

        console.log(err);



      },
    



    })

  } ;


  ngOnInit(): void {

    this._CartService.getUserCart().subscribe({

      next: (response) =>{

        console.log(response);
        this.cartDetails = response.data; 
        
        this.CartItems = response ;// { totalCartPrice , products: [ {count , price , product:{}} ]  }

      } ,

      error:(err)=>{
        console.log(err)
      }



    })
    
  } ;


  changeCount(id:string , countProduct:number ):void

  {
    if( countProduct > 0){
      this._CartService.updateCart( id , countProduct ).subscribe({

        next: (response)=>{
          console.log(response.data)
          this.cartDetails = response.data ;
        },
  
        error: (err)=>{
          console.log(err)
        }
  
  
  
      })
    }
   
  } ;

  clear():void
  {
    this._CartService.clearCart().subscribe({
      next:(response)=>{

        if( response.message == "success"){

          this.cartDetails = null ;
          this._CartService.cartNumber.next(0) ;
          this.CartItems = 0


        }
      }
    })
  }

  

}
