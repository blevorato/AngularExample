import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { ShelfComponent } from './shelf/shelf.component';
import { ShareModule } from './shared/share.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, MainComponent, ProductComponent, ShelfComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ShareModule,
    FormsModule
  ]
})
export class LayoutModule { }
