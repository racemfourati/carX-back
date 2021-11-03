import { Module } from '@nestjs/common';
import { TwilioModule } from 'nestjs-twilio';

@Module({

    imports: [
        TwilioModule.forRoot({
          accountSid: 'ACc6f793d15d88e5313cab4b8bc33c2b6b',
          authToken: '5ecfc1903e0652391a787ba48e88a0e9',
        }),
      ],


})
export class PhoneModule {}
