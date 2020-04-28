import { Module } from '@nestjs/common';
import { UserClaimController } from './user-claim.controller';
import { UserClaimService } from './user-claim.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserClaim } from '../entity/user-claim.entity';

@Module({
    imports:[TypeOrmModule.forFeature([UserClaim])],
    controllers:[UserClaimController],
    providers: [UserClaimService],
    exports: [UserClaimService]
})
export class UserClaimModule {}
