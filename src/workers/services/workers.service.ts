import { Injectable} from '@nestjs/common';
import { workerEntity } from '../workers.entity';
import {InjectRepository} from '@nestjs/typeorm'
import {Repository} from "typeorm"
import {Worker} from "../workers.interface"
import { from,Observable } from 'rxjs';

@Injectable()
export class WorkersService {
    constructor(
        @InjectRepository(workerEntity)
        private readonly workerRepository: Repository<workerEntity>
    ){}

  add(worker:Worker):Observable<Worker> {
      return from(this.workerRepository.save(worker))
  }

}
