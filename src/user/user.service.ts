import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInsertDto } from './user-insert-dto';
import { UserUpdateDto } from './user-update-dto';
import { ObjectID } from 'mongodb';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
        
    ) {
       
     }
     async getAllUsers(): Promise<User[]> {
        var result = this.userRepository.find();
        return result;

      }
      async createUser(dto: UserInsertDto): Promise<User> {        
        const user = User.fromCreateDto(dto);    
        var created = await this.userRepository.save(user); 
        return created;      
      }
      async updateUser(id: string, dto: UserUpdateDto) {        
        const existing = await this.userRepository.findOne(id);
        const updated = User.fromUpdateDto(dto);
        this.userRepository.merge(existing, updated);
        return this.userRepository.save(existing);
      }

      async deleteUser(id: string) {       
        return this.userRepository.delete(id);
      }
   
}
