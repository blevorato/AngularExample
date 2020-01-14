import { Injectable } from '@angular/core';
import { ProductService } from '../product/product.service';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public products: any[];
  public products$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private productApi: ProductService
  ) { 
    this.getProducts();
  }


  public getProducts() {
    this.productApi.getAll().subscribe((res: any) => {
      this.products = res;
      this.products$.next(res);
    } );
  }

  public deleteProduct(id: number){
    this.productApi.deleteProduct(id);
  }
}
