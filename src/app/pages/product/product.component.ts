import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductsService } from '../../services/products.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.listProduct();
  }

  updateStock(id:string) {
    var num= ((document.getElementById("number-"+id) as HTMLInputElement).value);
    if(num == undefined || num == ""){
      num = "1";
    }

    this.productService.updateStock(id,num).pipe(
      tap(( res: any ) => this. listProduct() )
    ).subscribe();
    
  }

  listProduct(){
    this.productService.getProducts().pipe(
      tap(( res: Product[] ) => this.products = res)
    ).subscribe()
  }
}
