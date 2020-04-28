import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tenant } from '../entity/tenant.entity';
import { Repository } from 'typeorm';
import { TenantCreateDto } from './tenant-create-dto';

@Injectable()
export class TenantService {
    constructor(
        @InjectRepository(Tenant)
        private readonly tenantRepository: Repository<Tenant>
    ) {
       
     }
     async create(dto: TenantCreateDto): Promise<Tenant> {        
        const interest = Tenant.fromCreateDto(dto);    
        return await this.tenantRepository.save(interest);      
      }

}
