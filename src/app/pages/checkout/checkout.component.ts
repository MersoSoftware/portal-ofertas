import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Oferta } from 'src/model/oferta';
import { OfertaService } from 'src/services/oferta.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  ofertas!:Oferta;
  oferta:any;
  id!:any;
  numeroCartao!:any;
  nomeUsuario!:any;
  dataVencimento!:any;

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
