import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../shared/services/data/data.service';
import { Observable, ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

public products$: ReplaySubject<any[]>;
public id: number;
private subProducts: Subscription;

  constructor(
    private data: DataService
  ) {
    this.products$ = data.products$;
    this.subProducts = this.products$.subscribe((products) => console.log(products));

   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subProducts.unsubscribe();
  }
  public deleteProduct() {
    this.data.deleteProduct(this.id);
  }
}
