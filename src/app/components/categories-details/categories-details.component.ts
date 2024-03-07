import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcomdataService } from 'src/app/shared/services/ecomdata.service';

@Component({
  selector: 'app-categories-details',
  templateUrl: './categories-details.component.html',
  styleUrls: ['./categories-details.component.css']
})
export class CategoriesDetailsComponent implements OnInit {
  constructor( private EcomdataService:EcomdataService , private _ActivatedRoute:ActivatedRoute ){}

  categoryId:any ='' ;
  categoryDetail:any = {} ;



  ngOnInit(): void {


    this._ActivatedRoute.paramMap.subscribe({
      next : (params)=>{
        // console.log (params);
       this.categoryId = params.get('id') ;
      }
    }) ;


    this.EcomdataService.getSpecificCategories(this.categoryId).subscribe({
      next: (response)=>{
        // console.log(response.data);
        this.categoryDetail = response.data
      }
    })

    

  } ;


 




}
