import { Module } from '@nestjs/common';
import { CloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';

@Module({
  providers: [ CloudinaryService],
  exports: [CloudinaryProvider],
})
export class CloudinaryModule {}