import { Entity, ObjectIdColumn, Column } from "typeorm";
import { ObjectID } from "mongodb";

@Entity('devices')
export class Device {
    @ObjectIdColumn() id: ObjectID;
    @Column() tenantId: ObjectID;
    @Column() userId: ObjectID;
    @Column() userAgent: string;
    @Column() pushToken: string;
    @Column() canSendEmail: boolean;
    @Column() canSendPhone: boolean;
    @Column() canSendPush: boolean;
}
