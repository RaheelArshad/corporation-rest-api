
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Interest } from 'src/entity/interest.entity';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class InterestService {
    constructor(
        @InjectRepository(Interest)
        private interestRepository: Repository<Interest>,
    ) {

     }
     async  findAll(): Promise<Interest[]> {
        return await this.interestRepository.find();
    }

    async  create(interest: Interest): Promise<Interest> {
        debugger;
        return await this.interestRepository.save(interest);
    }

    async update(interest: Interest): Promise<UpdateResult> {
        return await this.interestRepository.update(interest.id, interest);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.interestRepository.delete(id);
    }
}
