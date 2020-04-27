import { Controller, Get, Body, Post, Put, Param, Delete } from '@nestjs/common';
import { InterestService } from './interest.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBadRequestResponse } from '@nestjs/swagger';
import { InterestDto } from './interest-dto';
import { InterestCreateDto } from './interest-create-dto';
import { DeleteResult } from 'typeorm';
import { InterestUpdateDto } from './interest-update-dto';
import { ObjectID } from 'mongodb';
import { Interest } from '../entity/interest.entity';

@Controller('interest')
@ApiTags("interests")
export class InterestController {
  constructor(private readonly interestsService: InterestService){}
  @Get("/")
  @ApiOperation({ summary: "Get all interests" })
  async getAllUsers() {
    return this.interestsService.getAllInterests();
  } 
  @Post("/")
  @ApiOperation({ summary: "Create a interest" })
  async createInterest(@Body() dto: InterestCreateDto): Promise<Interest> {
    return this.interestsService.createInterest(dto);
  }

  @Put(":id") 
  @ApiOperation({ summary: "Update a user" })
  async updateInterest(
    @Param("id") id: string,
    @Body() dto: InterestUpdateDto,
  ): Promise<Interest> {   
   return await this.interestsService.updateInterest(id, dto);    
  }
  @Delete(":id") 
  @ApiOperation({ summary: "Delete a user" })
  async deleteInterest(@Param("id") id: string): Promise<DeleteResult> {
   return this.interestsService.deleteInterest(id);   
  }
}

