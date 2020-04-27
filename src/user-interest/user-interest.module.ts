import { Module } from '@nestjs/common';
import { UserInterestService } from './user-interest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInterestEntity } from '../entity/user-interest-entity';
import { UserInterestController } from './user-interest.controller';
import { Interest } from '../entity/interest.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserInterestEntity,Interest])
],
  controllers:[UserInterestController],
  providers: [UserInterestService],
  exports:[UserInterestService]
})
export class UserInterestModule {}
