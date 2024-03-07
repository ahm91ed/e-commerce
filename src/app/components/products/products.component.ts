import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor (private _EcomdataService:EcomdataService , private _CartService:CartService , private _WishlistService:WishlistService,  private _ToastrService:ToastrService){}

productData:any[] =[] ;

wishlistData:string[] = [] ;

  ngOnInit(): void {

    this._EcomdataService.getAllProducts().subscribe({
      next : (response)=>{
        this.productData = response.data;
        
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
      }


    })
  } ;

  addCart(id:string):void
  
  {
    this._CartService.addToCart(id).subscribe({

      next:(response)=>{ 

        console.log(response) ;
        this._ToastrService.success(response.message) ;
        this._CartService.cartNumber.next(response.numOfCartItems)


      } ,
      error:(err)=>{

        console.log(err) ;


      }


        

        

     

    })
  } ;


}
