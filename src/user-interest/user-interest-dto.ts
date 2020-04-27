import { ApiProperty } from "@nestjs/swagger";

import { UserDto } from "../user/user-dto";
import { InterestDto } from "../interest/interest-dto";
import { Type } from "class-transformer";
import { ObjectID } from "mongodb";

export class UserInterestDto {
    @ApiProperty()
    id: ObjectID; 
    @ApiProperty()     
    userId:ObjectID;
    @ApiProperty()
    interestId:ObjectID;
    // @ApiProperty() 
    // @Type(() => UserDto)   
    // user: UserDto;   
    // @ApiProperty()    
    // @Type(() => InterestDto)
    // interest: InterestDto;
    @ApiProperty()
    interestLevel: number;
}
