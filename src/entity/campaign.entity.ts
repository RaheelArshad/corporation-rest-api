import { ObjectIdColumn, Column, Entity } from "typeorm";
import { ObjectID } from "mongodb";
@Entity('compaigns')
export class Campaign {
    @ObjectIdColumn() id: ObjectID;
    @Column() tenantId: ObjectID;
    @Column() name: string;
    @Column() url: string;
}
