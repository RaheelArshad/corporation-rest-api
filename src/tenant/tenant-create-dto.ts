import { ApiProperty } from "@nestjs/swagger";

export class TenantCreateDto {
       @ApiProperty()
       name: string;
       @ApiProperty()
       code: string;
       @ApiProperty()
       domain: string;
}
