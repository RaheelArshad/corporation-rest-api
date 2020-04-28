import { ObjectIdColumn, Column, Entity } from "typeorm";
import { ObjectID } from "mongodb";

@Entity('tenats')
export class Tenant {
        @ObjectIdColumn() id: ObjectID;
        @Column() name: string;
        @Column() code: string;
        @Column() domain: string;
}
