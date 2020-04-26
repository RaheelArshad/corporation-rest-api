import { ApiProperty } from "@nestjs/swagger";

export class UserInsertDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    phone: string;
    @ApiProperty()
    pushToken: string;
    @ApiProperty()
    emailVerified: boolean;
    @ApiProperty()
    phoneVerified: boolean;
    @ApiProperty()
    sendEmail: boolean;
    @ApiProperty()
    sendSMS: boolean;
    @ApiProperty()
    sendPush: boolean;
    @ApiProperty()
    emailCode: number;
    @ApiProperty()
    phoneCode: number;    
}
