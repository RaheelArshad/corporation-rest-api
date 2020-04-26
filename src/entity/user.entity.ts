import { Entity, Column, ObjectIdColumn, OneToMany } from 'typeorm';
import { UserUpdateDto } from 'src/user/user-update-dto';
import { UserInsertDto } from 'src/user/user-insert-dto';
import { UserInterestEntity } from './user-interest-entity';
import { ObjectID } from 'mongodb';

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
    @OneToMany(type => UserInterestEntity, userInterests => userInterests.interest)
    userInterests: UserInterestEntity[];
    
    static fromCreateDto(dto: UserInsertDto): User {
        const user = new User();
        user.email = dto.email;
        user.phone = dto.phone;
        user.pushToken = dto.pushToken;
        user.emailVerified = dto.emailVerified;
        user.phoneVerified = dto.phoneVerified;
        user.sendEmail = dto.sendEmail;
        user.sendSMS = dto.sendSMS;
        user.sendPush = dto.sendPush;
        user.emailCode = dto.emailCode;
        user.phoneCode = dto.phoneCode;        
        return user;
      }
      static fromUpdateDto(dto: UserUpdateDto): User {
        const user = new User();      
        user.email = dto.email;
        user.phone = dto.phone;
        user.pushToken = dto.pushToken;
        user.emailVerified = dto.emailVerified;
        user.phoneVerified = dto.phoneVerified;
        user.sendEmail = dto.sendEmail;
        user.sendSMS = dto.sendSMS;
        user.sendPush = dto.sendPush;
        user.emailCode = dto.emailCode;
        user.phoneCode = dto.phoneCode;
        return user;
      }
}
