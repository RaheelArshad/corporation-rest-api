import { ObjectIdColumn, Column, ManyToOne, Entity, JoinColumn } from "typeorm";
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
    @ManyToOne(() => User, user => user.userInterests)
    @JoinColumn()
    user: User;
    @ManyToOne(() => Interest, interest => interest.userInterests)    
    @JoinColumn()
    interest: Interest;
    @Column()
    interestLevel: number;

    static fromEntityToDto(dto: UserInterestEntity):UserInterestDto {   
        
         const userInterest = new UserInterestDto();        
         userInterest.userId = new ObjectID(dto.userId);;
         userInterest.interestId = new ObjectID(dto.interestId);
         userInterest.interestLevel = dto.interestLevel;        
         return userInterest;
     }
    static fromCreateDto(dto: UserInterestCreateDto):UserInterestEntity {         
        const userInterest = new UserInterestEntity();
        userInterest.userId = new ObjectID(dto.userId);
        userInterest.interestId = new ObjectID(dto.interestId);
        userInterest.interestLevel = dto.interestLevel;        
        return userInterest;
    }
    static fromUpdateDto(dto: UserInterestUpdateDto):UserInterestEntity {        
         const userInterest = new UserInterestEntity();       
         userInterest.interestLevel = dto.interestLevel;       
        userInterest.userId = new ObjectID(dto.userId);
        userInterest.interestId = new ObjectID(dto.interestId);        
         return userInterest;
     }
}
