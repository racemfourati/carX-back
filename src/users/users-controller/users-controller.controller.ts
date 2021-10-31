import { Body, Controller, Post, Get } from '@nestjs/common';
import { Users } from '../user.interface';
import { UsersService } from '../users/users.service';
import { Observable } from 'rxjs';

@Controller('users')
export class UsersController {

  constructor(private UsersService: UsersService){}

  @Post()
  add(@Body() user: Users): Observable<Users>{
      console.log(user)
      return this.UsersService.add(user)
  }


  @Get()
  findAll(): Observable<Users[]>{
      return this.UsersService.findAll()
  }  

}
