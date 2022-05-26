import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Oferta } from 'src/model/oferta';
import { OfertaService } from 'src/services/oferta.service';

@Component({
  selector: 'app-detalhe-compra',
  templateUrl: './detalhe-compra.component.html',
  styleUrls: ['./detalhe-compra.component.css']
})
export class DetalheCompraComponent implements OnInit {


  ofertas!:Oferta;
  oferta:any;
  id!:any;
  constructor(private ofertaService: OfertaService,
    private activatedRoute :ActivatedRoute ) {}


    ngOnInit() {
      let param: Observable<Params> = this.activatedRoute.params;
      param.subscribe(
        urlParams =>{
          this.id = urlParams['id'];
          this.ofertaService.getOfertaById(this.id)
          .subscribe(response => this.oferta = response);
        }
      )
    }


}
