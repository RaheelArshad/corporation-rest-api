import { ObjectID } from "mongodb";
import { ObjectIdColumn, Column, Entity } from "typeorm";
@Entity('userclaims')
export class UserClaim {
    @ObjectIdColumn() id: ObjectID;
    @Column() email: string;
    @Column() phone: string;
    @Column() data: {};
    @Column() tenantCode: string;
    @Column() userAgent: string;
    @Column() emailActivationCode: string;
    @Column() emailValidated: boolean;
    @Column() phoneActivisationCode: string;
    @Column() phoneValidated: boolean;
    @Column() isComplete:boolean;
}

