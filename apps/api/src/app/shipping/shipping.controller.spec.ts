import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShippingInvoice } from './shipping-invoice';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';

describe('ShippingController', () => {
  let controller: ShippingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShippingController],
      providers: [
        ShippingService,
        {
          provide: getRepositoryToken(ShippingInvoice),
          useClass: Repository,
        },
      ],
    }).compile();

    controller = module.get<ShippingController>(ShippingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
