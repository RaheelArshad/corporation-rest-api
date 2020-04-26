import { ApiProperty } from "@nestjs/swagger";
import { UserUpdateDto } from "../user/user-update-dto";
import { Type } from "class-transformer";
import { InterestUpdateDto } from "../interest/interest-update-dto";
export class UserInterestUpdateDto {
    @ApiProperty()     
    userId:string;
    @ApiProperty()
    interestId:string;
    @ApiProperty()
    @Type(() => UserUpdateDto)
    user: UserUpdateDto; 
    @ApiProperty()
    @Type(() => InterestUpdateDto)
    interest: InterestUpdateDto;  
    @ApiProperty()  
    interestLevel: number;
}
