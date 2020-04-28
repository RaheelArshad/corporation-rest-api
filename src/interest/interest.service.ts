
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InterestCreateDto } from './interest-create-dto';
import { InterestUpdateDto } from './interest-update-dto';
import { Interest } from '../entity/interest.entity';

@Injectable()
export class InterestService{
    constructor(
        @InjectRepository(Interest)
        private readonly interestRepository: Repository<Interest>        
    ) {
        
     }
     async getAllInterests(): Promise<Interest[]> {
        return this.interestRepository.find();
      }
      async createInterest(dto: InterestCreateDto): Promise<Interest> {        
        const interest = Interest.fromCreateDto(dto);    
        return await this.interestRepository.save(interest);      
      }
      async updateInterest(id: string, dto: InterestUpdateDto) {               
        const existing = await this.interestRepository.findOne(id);
        const updated = Interest.fromUpdateDto(dto); 
        const result = Object.assign(existing,updated);        
        return this.interestRepository.save(result);
      }

      async deleteInterest(id: string) {       
        return this.interestRepository.delete(id);
      }
}
