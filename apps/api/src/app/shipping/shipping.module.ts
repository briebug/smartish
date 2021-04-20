import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShippingInvoice } from './shipping-invoice';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShippingInvoice])],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
