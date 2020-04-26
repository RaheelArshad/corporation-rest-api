import { UserInsertDto } from "../user/user-insert-dto";
import { InterestCreateDto } from "../interest/interest-create-dto";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

export class UserInterestCreateDto { 
    @ApiProperty()     
    userId:string;
    @ApiProperty()
    interestId:string;
    @ApiProperty()
    @Type(() => UserInsertDto)
    user: UserInsertDto; 
    @ApiProperty()
    @Type(() => InterestCreateDto)
    interest: InterestCreateDto;  
    @ApiProperty()  
    interestLevel: number;
}
