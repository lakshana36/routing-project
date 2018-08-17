import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { AvailpdctComponent } from './availpdct/availpdct.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderlistComponent, AvailpdctComponent]
})
export class OrderModule { }
