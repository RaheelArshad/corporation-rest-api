import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { InterestCreateDto } from '../interest/interest-create-dto';
import { InterestUpdateDto } from '../interest/interest-update-dto';
import { UserInterestEntity } from './user-interest-entity';
import { InterestDto } from '../interest/interest-dto';
import { ObjectID } from 'mongodb';


@Entity('interests')
export class Interest {
    @ObjectIdColumn() id: ObjectID;    
    @Column() name:string ;     
    @OneToMany(type => UserInterestEntity, userInterests => userInterests.interest)
    userInterests: UserInterestEntity[];
    static fromEntityToDto(dto: Interest): InterestDto {
      const interest = new InterestDto();
      interest.name = dto.name;
      interest.id = dto.id.toHexString();
      return interest;
    }
    static fromCreateDto(dto: InterestCreateDto): Interest {
        const interest = new Interest();
        interest.name = dto.name;
        return interest;
      }
      static fromUpdateDto(dto: InterestUpdateDto): Interest {
        const interest = new Interest();
        interest.name = dto.name;
        return interest;
      }
}
