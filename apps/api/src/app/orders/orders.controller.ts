import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Order } from './order';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly service: OrdersService) {}

  @Get()
  loadAll(): Observable<Order[]> {
    return this.service.loadAll();
  }

  @Post()
  create(@Body() order: Order): Observable<Order> {
    return this.service.create(order);
  }

  @Put(':id')
  update(@Body() order: Order): Observable<Order> {
    return this.service.update(order);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<Order> {
    return this.service.delete(id);
  }
}
