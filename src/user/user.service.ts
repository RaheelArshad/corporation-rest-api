import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/user.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {
     }
     async  findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }
    async  create(interest: User): Promise<User> {
        debugger;
        return await this.userRepository.save(interest);
    }
    async update(interest: User): Promise<UpdateResult> {
        return await this.userRepository.update(interest.id, interest);
    }
    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}
