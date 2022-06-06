import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './product/product.component';
import { HeroComponent } from './hero/hero.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
      //  canActivate: [AuthGuard],
        children: [
            { path: '', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'products', component: ProductComponent, data: { titulo: 'Products' } },
            { path: 'hero', component: HeroComponent, data: { titulo: 'Hero' } }
        ]
    },
];

@NgModule( {
    imports: [RouterModule.forChild( routes )],
    exports: [RouterModule]
} )
export class PagesRoutingModule { }


