import { Component, OnDestroy, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { WishlistService } from 'src/app/shared/services/wishlist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {


  constructor(private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService , private _WishlistService:WishlistService ){}

  products:Product[] = [];

  categories:any[] = [] ;

  searchTerm:string = '' ;

  wishlistData:string[] = [] ;

  cartNum:number = 0 ;

  
  ngOnInit(): void {

    // get All products
   this._EcomdataService.getAllProducts().subscribe({

      next: (response)=>{

        // console.log (response.data ) ;

        this.products = response.data ;

      }
    }) ;


    // get Categories

   this._EcomdataService.getCategories().subscribe({

    next: (response)=>{

      // console.log(response.data) ;
      this.categories = response.data ;

    }

   }) ;



   this._WishlistService.getWishlist().subscribe({

    next: (response)=>{
      // console.log(response.data , 'hello') ;

      const newData = response.data.map( (item:any)=> item._id )

      // console.log(newData , 'new   data') ;

      this.wishlistData = newData

    }



   })






  } ;




  addFavouriteItem(wishlistId:any):void
  {
    this._WishlistService.addToWishlist(wishlistId).subscribe({

      next: (response)=>{
        console.log(response) ;
        this._ToastrService.success(response.message) ;
        this.wishlistData = response.data
      }

    })
  } ;

  deleteFavouriteItem(prodId:any){
    this._WishlistService.deleteWishlist(prodId).subscribe({

      next: ( response )=>{

        // console.log(response)
        this._ToastrService.success(response.message) ;
        this.wishlistData = response.message ;
      }


    })
  }

  

  addCart(id:any):void
  
  {
    this._CartService.addToCart(id).subscribe({

      next:(response)=>{ 

        console.log(response) ;
        this._ToastrService.success(response.message);
        this._CartService.cartNumber.next(response.numOfCartItems)

      } ,
      error:(err)=>{

        console.log(err) ;


      }


        

        

     

    })
  } ;

  categoriesSliderOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: true ,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: false,
  } ;

  mainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true ,
    navText: ['', ''],
    items: 1 ,
    nav: false,
  } ;

 



}
