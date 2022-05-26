import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                  //api
import {MenubarModule} from 'primeng/menubar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfertaService } from 'src/services/oferta.service';
import { HttpClientModule } from '@angular/common/http';
import { DetalheCompraComponent } from './pages/detalhe-compra/detalhe-compra.component';
import {Galleria} from 'primeng/galleria';
import { CheckoutComponent } from './pages/checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    DetalheCompraComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    MenubarModule,
    NgbModule,
    HttpClientModule,




  ],
  providers: [
    OfertaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
