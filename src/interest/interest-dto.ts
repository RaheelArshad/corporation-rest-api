import { ApiProperty } from "@nestjs/swagger";
export class InterestDto {
   @ApiProperty()
   id: string; 
   @ApiProperty()
   name:string;   
}
