import { Controller, Post, Body } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Tenant } from '../entity/tenant.entity';
import { TenantCreateDto } from './tenant-create-dto';

@Controller('tenants')
@ApiTags("tenants")
export class TenantController {
    constructor(private readonly tenantService: TenantService){}
    
    @Post("/")
    @ApiOperation({ summary: "Create a tenant" })
    async create(@Body() dto: TenantCreateDto): Promise<Tenant> {
      return this.tenantService.create(dto);
    }

} 
