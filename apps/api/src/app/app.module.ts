import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingInvoice, BillingModule } from './billing';
import { CatalogModule, Category, Product } from './catalog';
import { Customer, CustomersModule } from './customers';
import { OrdersModule } from './orders/orders.module';
import { Order } from './orders';
import { ShippingModule } from './shipping/shipping.module';
import { ShippingInvoice } from './shipping';

const config: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: process.env.CONNECTION_STRING,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: [
    BillingInvoice,
    Category,
    Product,
    Customer,
    Order,
    ShippingInvoice,
  ],
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(config),
    BillingModule,
    CatalogModule,
    CustomersModule,
    OrdersModule,
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
