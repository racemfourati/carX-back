import { Module } from '@nestjs/common';

import { WorkersService } from './services/workers.service';
import { WorkersController } from './controller/workers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { workerEntity } from './workers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([workerEntity])],
  providers: [WorkersService],
  controllers: [WorkersController]
})
export class WorkersModule {}
