import { Body, Controller, Post, Get, Put, Delete, Res, UploadedFile, UseInterceptors, HttpStatus } from '@nestjs/common';
import { Users } from '../user.interface';
import { UsersService } from '../users/users.service';
import { Observable, Subscriber } from 'rxjs';
import { Response } from 'express';

import { FileInterceptor } from '@nestjs/platform-express'

@Controller('users')
export class UsersController {

  constructor(private UsersService: UsersService) { }

  @Post()
  add(@Body() user: Users, @Res() respone: Response): any {
    this.UsersService.getOne(user).subscribe((result) => {
      if (result.length == 0) {

        this.UsersService.add(user)
        respone.status(HttpStatus.CREATED)
          .json({ respond: "NOT FOUND", data: result })
      } else if (result.length > 0) {
        respone.status(HttpStatus.FOUND)
          .json({ respond: "FOUND", data: result })
      }

    })
  }

    @Put('edit')
   
   async updateUser(@Body() user: Users  ){
    
  
  
      return this.UsersService.updateUser(user)
    }

  @Get()
  findAll(): Observable<Users[]> {
    return this.UsersService.findAll()
  }
  //   @Post('upload')
  //   @UseInterceptors(FileInterceptor('file'))
  //  async uploadImage(@UploadedFile() file: Express.Multer.File) {
  //     console.log(file)

  //    const  photo = await this.UsersService.uploadImageToCloudinary(file);
  //    console.log(photo.url)
  //    await this.UsersService.updatePhoto(photo.url)
  //   }


}
