import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserClaim } from '../entity/user-claim.entity';
import { Repository } from 'typeorm';
import { UserClaimDto } from './user-claim-dto';


@Injectable()
export class UserClaimService {
    constructor(
        @InjectRepository(UserClaim)
        private readonly userClaimRepository: Repository<UserClaim>
        
    ) {}
    async create(dto: UserClaimDto): Promise<any> {
        return  {
          id: 'sdfdfd',
          claimId: 'wirye76r234iiwdeifeirew',
          type: 1,
          code: 'dfsdfsdfsdfsdfsdfsdfsdf'
        };
        //return this.userClaimRepository.find();
    }
}
