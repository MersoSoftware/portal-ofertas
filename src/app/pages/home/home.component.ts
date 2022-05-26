import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { map } from 'rxjs';
import { Oferta } from 'src/model/oferta';
import { OfertaService } from '../../../services/oferta.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ofertas:Oferta[] =[];
  restaurantes:any=[];
  hotel:any=[];
  entretenimento:any=[];
  oferta:any;



  constructor(private ofertaService: OfertaService,
    private router: Router, ) { }

  ngOnInit(): void {

   this.listFilter();

  }



  listFilter(){
    this.ofertaService.getAll().subscribe(
      list=>{
        this.entretenimento = list.filter(function(element, i, array){
          return element.categoria.id === 3;
        })
        this.restaurantes = list.filter(function(element, i, array){
          return element.categoria.id === 2;
        })
        this.hotel = list.filter(function(element, i, array){
          return element.categoria.id === 1;
        })
      }

    )
  }


}
