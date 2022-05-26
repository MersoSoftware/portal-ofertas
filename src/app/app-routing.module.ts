import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { DetalheCompraComponent } from './pages/detalhe-compra/detalhe-compra.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'detalhe/:id', component:DetalheCompraComponent},
  {path:'checkout/:id', component:CheckoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
