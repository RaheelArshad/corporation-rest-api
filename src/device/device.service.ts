import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Device } from '../entity/device.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { Tenant } from '../entity/tenant.entity';

@Injectable()
export class DeviceService {
    constructor(
        @InjectRepository(Device)
        private readonly deviceRepository: Repository<Device>,
        @InjectRepository(Tenant)
        private readonly tenantRepository: Repository<Tenant>
        
    ) {
       
     }
     async findByTenantAgent(tenantCode: string, userAgent:string):Promise<Device>{   
       const options:FindOneOptions<Tenant> = {
            where: { tenantCode: tenantCode } }       
       const tenantResult = await this.tenantRepository.findOne(options);  

      const options2: FindOneOptions<Device> = {
        where: { 
            and:[{
                tenantId: tenantResult.id 
            }, 
            {userAgent: userAgent}]
            }
        
         } 
       
       return await this.deviceRepository.findOne(options2) ;
      }
}