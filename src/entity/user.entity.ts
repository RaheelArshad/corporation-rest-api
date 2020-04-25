import { Entity, Column, ObjectIdColumn, ObjectID, OneToMany } from 'typeorm';
import { UserInterest } from './user-interest.entity';

@Entity('users')
export class User {
    @ObjectIdColumn() id: ObjectID;
    @Column() email: string;
    @Column() phone: string;
    @Column() pushToken: string;
    @Column() emailVerified: boolean;
    @Column() phoneVerified: boolean;
    @Column() sendEmail: boolean;
    @Column() sendSMS: boolean;
    @Column() sendPush: boolean;
    @Column() emailCode: number;
    @Column() phoneCode: number;
    @OneToMany(type => UserInterest, userinterest => userinterest.user)
    userInterests: UserInterest[];       
}
