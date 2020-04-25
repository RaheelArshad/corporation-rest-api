import { Controller, Get, Post, Body } from '@nestjs/common';
import { InterestService } from './interest.service';
import { Interest } from 'src/entity/interest.entity';
import { ApiBody, ApiQuery } from '@nestjs/swagger';

@Controller('interest')
export class InterestController {
    constructor(private interestsService: InterestService){}
   
    @Get()
    getAll(): Promise<Interest[]> {
      return this.interestsService.findAll();
    }
    @ApiBody({ type: [Interest] })
    @Post('create')
    async create(@Body() contactData: Interest): Promise<any> {
      return this.interestsService.create(contactData);
    }
}

