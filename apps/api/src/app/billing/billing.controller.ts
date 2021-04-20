import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { BillingInvoice } from './billing-invoice';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly service: BillingService) {}

  @Get()
  loadAll(): Observable<BillingInvoice[]> {
    return this.service.loadAll();
  }

  @Post()
  create(@Body() billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return this.service.create(billingInvoice);
  }

  @Put(':id')
  update(@Body() billingInvoice: BillingInvoice): Observable<BillingInvoice> {
    return this.service.update(billingInvoice);
  }
}
