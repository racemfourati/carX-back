import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { StripeModule } from 'nestjs-stripe';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    StripeModule.forRootAsync({
      inject: [ConfigService],
      useFactory:(configService: ConfigService)=>({
        apiKey: 'sk_test_51Jr2k6HXpALkWPl9A8k9ssiO4J7Pz2pq7Rp9CDpIK75VDUMRkHeBY2DI8isnzNgB3hBoSmRuRc79bvTs1TonYCuN004jue5BZz',
        apiVersion: '2020-08-27'
      })
    }),
 ],
  controllers: [PaymentController],
  providers: [PaymentService]
})
export class PaymentModule {}
