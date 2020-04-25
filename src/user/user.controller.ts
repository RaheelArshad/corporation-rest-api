import { Controller, Body, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entity/user.entity';

@Controller('user')
export class UserController {
    constructor(private interestsService: UserService){}
    @Get()
    getAll(): Promise<User[]> {
      return this.interestsService.findAll();
    }
    @Post('create')
    async create(@Body() contactData: User): Promise<any> {
      return this.interestsService.create(contactData);
    }
}
