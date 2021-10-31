import { Controller, Post, Body } from '@nestjs/common';
import { WorkersService } from '../services/workers.service';
import { Worker} from '../workers.interface'

@Controller('workers')
export class WorkersController {
  constructor(
      private workerService : WorkersService
       ){}

    @Post()
    add(@Body() worker: Worker){
        return this.workerService.add(worker)
    }

}
