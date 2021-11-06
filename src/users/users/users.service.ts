import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userEntity } from '../user.entity';
import { Repository, getRepository, createQueryBuilder,getConnection } from 'typeorm';
import { Users } from '../user.interface';
import { from, Observable } from 'rxjs';
import { CloudinaryService } from '../../image/cloudinary/cloudinary.service';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(userEntity)
        private userRepository: Repository<userEntity>
        , private cloudinary: CloudinaryService
    ) { }


     getOne(user: Users):Observable<userEntity[]> {
        
      
         return  from (   this.userRepository.find({
                where: [
                    { email: user.email }
                ]
            }))

         

    }
       async add(user: Users){
        
        try {   
            const data = await this.userRepository.save(user)
            return data ;
        }
            catch(err) {

            }
       
         }
         async updateUser(user:Users){
             
             console.log(user.id)
            return from (this.userRepository.update({
                id:user.id,
             },{
               name:user.name,
               email:user.email,
               phone:user.phone, 
              

            }))


         }
    

        async UrlPhotoFromCloudinary(file:Express.Multer.File){
            console.log(file)
            const url=await this.cloudinary.uploadImage(file)
            return url;
        }
    findAll(): Observable<Users[]> {
        return from(this.userRepository.find())
    }
  
}
