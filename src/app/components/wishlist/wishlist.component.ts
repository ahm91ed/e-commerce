import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/shared/services/wishlist.service';
import { Product } from 'src/app/shared/interfaces/product';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';


@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  constructor( private _WishlistService:WishlistService , private _ToastrService:ToastrService , private _CartService:CartService ){}

  products:Product[] = [];
  wishlistData:any[] = [] ;

  
  
  ngOnInit(): void {

    this._WishlistService.getWishlist().subscribe({

      next: (response)=>{

        this.products = response.data ;

        const newData = response.data.map( (item:any)=> item._id )
  
        this.wishlistData = newData
      }

    })
    
  } ;

  addFavouriteItem(wishlistId:string):void
  {
    this._WishlistService.addToWishlist(wishlistId).subscribe({

      next: (response)=>{
        console.log(response) ;
        this._ToastrService.success(response.message) ;
        this.wishlistData = response.data
      }



    })
  } ;

  deleteFavouriteItem(prodId:string){
    this._WishlistService.deleteWishlist(prodId).subscribe({

      next: ( response )=>{

        // console.log(response)
        this._ToastrService.success(response.message) ;
        this.wishlistData = response.message ;

        this._WishlistService.getWishlist().subscribe({
          next: ( response )=>{
            this.products = response.data
          }

        })

     

   

    



     
      }


    })
  }

  addCart(id:string):void
  
  {
    this._CartService.addToCart(id).subscribe({

      next:(response)=>{ 

        console.log(response) ;
        this._ToastrService.success(response.message) ;
        this._CartService.cartNumber.next(response.numOfCartItems)


      } ,
    


        

        

     

    })
  } ;






}
