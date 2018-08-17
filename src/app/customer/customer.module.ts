import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerlstComponent } from './customerlst/customerlst.component';
import { CustrateComponent } from './custrate/custrate.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerlstComponent, CustrateComponent]
})
export class CustomerModule { }
