import { Controller, Get, Put, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { DeleteResult } from 'typeorm';
import { UserDto } from './user-dto';
import { UserUpdateDto } from './user-update-dto';
import { UserInsertDto } from './user-insert-dto';
import { User } from '../entity/user.entity';

@Controller('user')
@ApiTags("users")
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get("/")
    @ApiOperation({ summary: "Get all users" })
    async getAllUsers() {
      return this.userService.getAllUsers();
    } 
    @Post("/")
    @ApiOperation({ summary: "Create a user" })
    async createInterest(@Body() dto: UserInsertDto): Promise<UserDto> {
      return this.userService.createUser(dto);
    }
  
    @Put(":id") 
    @ApiOperation({ summary: "Update a user" })
    async updateInterest(
      @Param("id") id: string,
      @Body() dto: UserUpdateDto,
    ): Promise<User> {
     return await this.userService.updateUser(id, dto);    
    }
    @Delete(":id") 
    @ApiOperation({ summary: "Delete a user" })
    async deleteUser(@Param("id") id: string): Promise<DeleteResult> {
     return this.userService.deleteUser(id);   
    }
  
}
