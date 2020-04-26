import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserInterestService } from './user-interest.service';
import { UserInterestCreateDto } from './user-interest-create-dto';
import { DeleteResult } from 'typeorm';
import { UserInterestDto } from './user-interest-dto';
import { UserInterestUpdateDto } from './user-interest-update-dto';
import { ObjectID } from 'mongodb';
import { UserInterestEntity } from 'src/entity/user-interest-entity';

@Controller('userinterests')
@ApiTags("userinterests")
export class UserInterestController {
    constructor(private readonly userInterestService: UserInterestService){

    }
    @Get("/")
    @ApiOperation({ summary: "Get all users interests" })
    async getAllUserInterests() {
      return this.userInterestService.getAllUserInterests();
    } 
    @Post("/")
    @ApiOperation({ summary: "Create a user interests" })    
    async createUserInterest(@Body() dto: UserInterestCreateDto): Promise<UserInterestDto> {
      return this.userInterestService.createUserInterest(dto);
    }

    @Put(":id") 
    @ApiOperation({ summary: "Update a user interest" })
    async updateInterest(
      @Param("id") id: string,     
      @Body() dto: UserInterestUpdateDto,
    ): Promise<UserInterestEntity> {
     return await this.userInterestService.updateUserInterest(id, dto);    
    }
    @Delete(":id") 
    @ApiOperation({ summary: "Delete a user" })
    async deleteUser(@Param("id") id: string): Promise<DeleteResult> {
     return this.userInterestService.deleteUserInterest(id);   
    }
}
