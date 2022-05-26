import { Injectable } from "@angular/core";

import { HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { Oferta } from "src/model/oferta";

@Injectable({
  providedIn: 'root'
})
export class OfertaService {

  constructor(private http: HttpClient) {

  }



  getAll():Observable<Oferta[]>{
    return this.http.get<Oferta[]>(`http://localhost:3004/ofertas`)
  }

  getOfertaById(id: number): Observable<Oferta>{
    return this.http.get<any>(`http://localhost:3004/ofertas/${id}`);
  }
}
