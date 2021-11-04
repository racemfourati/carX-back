import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkersModule } from './workers/workers.module';
<<<<<<< HEAD
import PhoneController from './auth/phone/phone.controller';
import { PhoneModule } from './auth/phone/phone.module';
import { PhoneService } from './auth/phone/phone.service';
import { CloudinaryModule } from './image/cloudinary/cloudinary.module';
// import { Cloudinary } from './image/cloudinary/cloudinary.Provider';
=======
import { ReviewsModule } from './reviews/reviews.module';




>>>>>>> cb6e9a2b9a89523e3a775144df3ec5d8f83d06bf


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true},
                                       
      ),
    TypeOrmModule.forRoot({
      type: "postgres",
      url: process.env.DATABASE_URL ,
      autoLoadEntities: true,
      synchronize: true,
<<<<<<< HEAD
    
=======
     
>>>>>>> cb6e9a2b9a89523e3a775144df3ec5d8f83d06bf
      extra: {
        ssl: true
      }
    }),
    UsersModule,
    WorkersModule,
<<<<<<< HEAD
    PhoneModule,
    CloudinaryModule
  ],
  controllers: [AppController, PhoneController],
  providers: [AppService, PhoneService],
  
=======
    ReviewsModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
   
>>>>>>> cb6e9a2b9a89523e3a775144df3ec5d8f83d06bf
})
export class AppModule {}
