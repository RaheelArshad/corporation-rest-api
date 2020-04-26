import { Injectable } from '@nestjs/common';
import { UserInterestEntity } from '../entity/user-interest-entity';
import { Repository, getManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInterestCreateDto } from './user-interest-create-dto';
import { UserInterestUpdateDto } from './user-interest-update-dto';
import { ObjectID } from 'mongodb';
import { UserInterestDto } from './user-interest-dto';

@Injectable()
export class UserInterestService {
    constructor(@InjectRepository(UserInterestEntity)
    private readonly userInterestRepository: Repository<UserInterestEntity>){

    }
    async getAllUserInterests(): Promise<UserInterestEntity[]> {
        const result = this.userInterestRepository.find();
        return result;

      }
      async createUserInterest(dto: UserInterestCreateDto): Promise<UserInterestDto> {        
        const user = UserInterestEntity.fromCreateDto(dto);    
        const created = await this.userInterestRepository.save(user); 
        return UserInterestEntity.fromEntityToDto(created);          
      }     
      async updateUserInterest(id: string,dto: UserInterestUpdateDto) {              
        const updated = UserInterestEntity.fromUpdateDto(dto);  
        const repo = getManager().getRepository(UserInterestEntity);
              repo.update(id, updated);   
        return this.userInterestRepository.findOne(id); 
      }
      async deleteUserInterest(id: string) {       
        return this.userInterestRepository.delete(id);
      }
}
