import { Module } from '@nestjs/common';
import { UserInterestController } from './user-interest.controller';
import { UserInterestService } from './user-interest.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInterest } from 'src/entity/user-interest.entity';

@Module({  
    imports:[TypeOrmModule.forFeature([UserInterest])] ,
    controllers:[UserInterestController],
    providers: [UserInterestService],
    exports: [UserInterestService]
})
export class UserInterestModule {
    
}
