import { Injectable } from '@nestjs/common';
import { UserInterestEntity } from '../entity/user-interest-entity';
import { Repository, getManager, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserInterestCreateDto } from './user-interest-create-dto';
import { UserInterestUpdateDto } from './user-interest-update-dto';
import { ObjectID } from 'mongodb';
import { UserInterestDto } from './user-interest-dto';
import { Interest } from '../entity/interest.entity';

@Injectable()
export class UserInterestService {
    constructor(@InjectRepository(UserInterestEntity)
    private readonly userInterestRepository: Repository<UserInterestEntity>,
    @InjectRepository(Interest)
    private readonly interestRepository: Repository<Interest>){

    }
    async getAllUserInterests(): Promise<UserInterestEntity[]> {
        const result = this.userInterestRepository.find();
        return result;

      }
      async getInterestsByUser(userId: string):Promise<any>{ 
        const options:FindOneOptions<UserInterestEntity> = {
          where: { userId:new ObjectID(userId) } } 
        const userinterests = await  this.userInterestRepository.find(options);
        const interest = await this.interestRepository.findByIds(userinterests.map(x => x.interestId));
        const result = userinterests.map(item => {
           return  {
             id: item.id,             
             userId: item.userId,            
             interestId:item.interestId,            
             name: interest.filter(x=> x.id.toHexString() == item.interestId.toHexString())[0].name,       
             interestLevel: item.interestLevel
           }
        });
      
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
        await repo.update(id, updated);   
        return this.userInterestRepository.findOne(id); 
      }
      async deleteUserInterest(id: string) {       
        return this.userInterestRepository.delete(id);
      }
}
