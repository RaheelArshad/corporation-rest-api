import { Module } from '@nestjs/common';
import { DeviceService } from './device.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Device } from 'src/entity/device.entity';
import { Tenant } from 'src/entity/tenant.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Device,Tenant])],
  providers: [DeviceService],
  exports: [DeviceService]

})

export class DeviceModule {}
