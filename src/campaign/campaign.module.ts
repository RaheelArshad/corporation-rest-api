import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Campaign } from '../entity/campaign.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Campaign])],
  providers: [CampaignService],
  exports:[CampaignService]
})
export class CampaignModule {}
