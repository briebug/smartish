import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ShippingInvoice } from './shipping-invoice';
import { ShippingService } from './shipping.service';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly service: ShippingService) {}

  @Get()
  loadAll(): Observable<ShippingInvoice[]> {
    return this.service.loadAll();
  }

  @Post()
  create(
    @Body() shippingInvoice: ShippingInvoice
  ): Observable<ShippingInvoice> {
    return this.service.create(shippingInvoice);
  }

  @Put(':id')
  update(
    @Body() shippingInvoice: ShippingInvoice
  ): Observable<ShippingInvoice> {
    return this.service.update(shippingInvoice);
  }
}
