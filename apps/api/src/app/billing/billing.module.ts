import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingInvoice } from './billing-invoice';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';

@Module({
  imports: [TypeOrmModule.forFeature([BillingInvoice])],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
