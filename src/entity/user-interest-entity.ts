import { ObjectIdColumn, Column, ManyToOne, Entity } from "typeorm";
import { User } from "./user.entity";
import { Interest } from "./interest.entity";
import { UserInterestCreateDto } from "../user-interest/user-interest-create-dto";
import { UserInterestUpdateDto } from "../user-interest/user-interest-update-dto";
import { ObjectID } from "mongodb";
import { UserInterestDto } from "../user-interest/user-interest-dto";

@Entity('userinterests')
export class UserInterestEntity {
   
    @ObjectIdColumn() id: ObjectID;   
    @Column()     
    userId:ObjectID;
    @Column()
    interestId:ObjectID;  
    @Column(() => User)  
    @ManyToOne(type => User, user => user.userInterests)
    user: User;
    @ManyToOne(type => Interest, interest => interest.userInterests)    
    interest: Interest;
    @Column()
    interestLevel: number;

    static fromEntityToDto(dto: UserInterestEntity):UserInterestDto {
      
        const interest = Interest.fromEntityToDto(dto.interest);
        interest.id = dto.interestId.toHexString();       
         const user = User.fromCreateDto(dto.user);
         user.id = new ObjectID(dto.userId);
         const userInterest = new UserInterestDto();
         userInterest.id = dto.id;
         userInterest.userId = user.id.toHexString();
         userInterest.interestId = interest.id;
         userInterest.interestLevel = dto.interestLevel;
         userInterest.interest = interest;
         userInterest.user = user;
         return userInterest;
     }
    static fromCreateDto(dto: UserInterestCreateDto):UserInterestEntity {
      
       const interest = Interest.fromCreateDto(dto.interest);
       interest.id = new ObjectID(dto.interestId);      
        const user = User.fromCreateDto(dto.user);
        user.id = new ObjectID(dto.userId);
        const userInterest = new UserInterestEntity();
        userInterest.userId = user.id;
        userInterest.interestId = interest.id;
        userInterest.interestLevel = dto.interestLevel;
        userInterest.interest = interest;
        userInterest.user = user;
        return userInterest;
    }
    static fromUpdateDto(dto: UserInterestUpdateDto):UserInterestEntity {
        const interest = Interest.fromUpdateDto(dto.interest);  
        interest.id = new ObjectID(dto.interestId);       
         const user = User.fromUpdateDto(dto.user);       
         user.id = new ObjectID(dto.userId) ;
         const userInterest = new UserInterestEntity();       
         userInterest.interestLevel = dto.interestLevel;
         userInterest.interest = interest;
         userInterest.userId = user.id;
         userInterest.interestId = interest.id;
         userInterest.user = user;
         return userInterest;
     }
}
