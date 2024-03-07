import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/shared/interfaces/product';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CartService } from 'src/app/shared/services/cart.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _ActivatedRoute:ActivatedRoute  ,  private _EcomdataService:EcomdataService , private _CartService:CartService , private _ToastrService:ToastrService){}


  addProduct(id:string){

    this._CartService.addToCart(id).subscribe({

      next:(response)=>{
        console.log(response) ;
        this._ToastrService.success(response.message);
        this._CartService.cartNumber.next(response.numOfCartItems)

      },

      error: (err)=>{
        console.log(err)
      }



    })


  }

  productDetailsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
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
        items: 4
      }
    },
    nav: false
  }


  productDetails:any = {}  ;

  ngOnInit(): void {

    this._ActivatedRoute.paramMap.subscribe({

      next: (params)=>{

       let idProduct:any =  params.get('id')
        // console.log ( idProduct) ;

        this._EcomdataService.getProductDetails(idProduct).subscribe({

          next: (response)=>{

            this.productDetails = response.data ;
            // console.log( response.data) ;
          }

  

        })

      }


    })
    
  }

}
