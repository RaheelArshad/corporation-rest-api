import { ApiProperty } from "@nestjs/swagger";

export class UserClaimDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    code: number; 
}

