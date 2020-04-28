import { Controller, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserClaimService } from './user-claim.service';
import { UserClaimDto } from './user-claim-dto';

@Controller('user-claim')
@ApiTags("user-claims")
export class UserClaimController {
    constructor(private readonly userClaimService: UserClaimService){

    }
    @Post("/")
    @ApiOperation({ summary: "Create a user claim" })
    async createClaim(@Body() dto: UserClaimDto): Promise<any> {
       
      return this.userClaimService.create(dto);
    }
}
