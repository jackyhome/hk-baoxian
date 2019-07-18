import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { DbService } from './db.service';
import { CreateMandateComponent } from './mandate/create-mandate/create-mandate.component';
import { SearchMandateComponent } from './mandate/search-mandate/search-mandate.component';
import { TestService } from './mandate/test.service';
import { TestServiceService } from './mandate/test-service.service';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: 'product', component: ProductTileComponent
  },
  {
    path: 'createMandate', component: CreateMandateComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'searchMandate/:searchType', component: SearchMandateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [
    DbService,
    {provide: TestService, useClass: TestServiceService}
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
