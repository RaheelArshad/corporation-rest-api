import { Entity, Column, ObjectIdColumn, ObjectID, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Interest } from './interest.entity';

@Entity('userinterests')
export class UserInterest{
    @ObjectIdColumn() id: ObjectID;      
    @ManyToOne(() => User, user => user.id)
    user: User;
    @ManyToOne(() => Interest, interest => interest.id)
    interest: Interest;
    @Column()
    interestLevel: number;
    
}
