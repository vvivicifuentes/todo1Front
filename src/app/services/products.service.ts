import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product.interface';

const base_url = environment.base_url;

@Injectable( {
  providedIn: 'root'
} )

export class ProductsService {

  constructor( private http: HttpClient ) { }

  getProducts (): Observable<Product[]> {
    const token = localStorage.getItem( 'token' ) || '';

    return this.http.get<Product[]>( `${base_url}/products`, {
      headers: {
        'Authorization': `${ token }`
      }
    } );

  }

  updateStock (id:string,quantity:string): Observable<Product> {
    const token = localStorage.getItem( 'token' ) || '';

    return this.http.put<Product>( `${base_url}/products/${id}/stock?quantity=${quantity}`, {
      headers: {
        'Authorization': `${ token }`
      }
    } );

  }
}
