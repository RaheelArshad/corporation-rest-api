import { Module } from '@nestjs/common';
import { UserInterestService } from './user-interest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInterestEntity } from '../entity/user-interest-entity';
import { UserInterestController } from './user-interest.controller';

@Module({
  imports:[TypeOrmModule.forFeature([UserInterestEntity])],
  controllers:[UserInterestController],
  providers: [UserInterestService],
  exports:[UserInterestService]
})
export class UserInterestModule {}
