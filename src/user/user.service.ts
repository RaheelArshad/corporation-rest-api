import { Injectable } from '@nestjs/common';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInsertDto } from './user-insert-dto';
import { UserUpdateDto } from './user-update-dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
        
    ) {
       
     }
     async getAllUsers(): Promise<User[]> {
          return this.userRepository.find();
      }
      async createUser(dto: UserInsertDto): Promise<User> {        
        const user = User.fromCreateDto(dto);    
        const created = await this.userRepository.save(user); 
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
