import { Entity, Column, ObjectIdColumn, ObjectID, OneToMany } from 'typeorm';
import { UserInterest } from './user-interest.entity';


@Entity('interests')
export class Interest {
    @ObjectIdColumn() id: ObjectID;   
   
    @Column() name:string ;       
    @OneToMany(() => UserInterest, userinterest => userinterest.interest)
    userInterests: UserInterest[];      
}
