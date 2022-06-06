import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

// Modulos
import { SharedModule } from '../shared/shared.module';
//import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProductComponent,
    HeroComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
  ],
  imports: [ 
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    HttpClientModule
  //  ComponentsModule
  ]
})
export class PagesModule { }
