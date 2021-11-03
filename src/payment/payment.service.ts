import { Injectable } from '@nestjs/common';
import {InjectStripe} from 'nestjs-stripe';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import stripe from 'stripe'
import Stripe from 'stripe';

@Injectable()
export class PaymentService {
public constructor(@InjectStripe() private readonly stripeClient:Stripe ){}

  create(createPaymentDto: CreatePaymentDto) {
    return 'This action adds a new payment';
  }

  findAll() {
    return `This action returns all payment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
