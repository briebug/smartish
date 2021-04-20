import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly service: CustomersService) {}

  @Get()
  loadAll(): Observable<Customer[]> {
    return this.service.loadAll();
  }

  @Post()
  create(@Body() customer: Customer): Observable<Customer> {
    return this.service.create(customer);
  }

  @Put(':id')
  update(@Body() customer: Customer): Observable<Customer> {
    return this.service.update(customer);
  }
}
