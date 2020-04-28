import { ObjectIdColumn, Column, Entity } from "typeorm";
import { ObjectID } from "mongodb";
import { TenantCreateDto } from "../tenant/tenant-create-dto";

@Entity('tenats')
export class Tenant {
        @ObjectIdColumn() id: ObjectID;
        @Column() name: string;
        @Column() code: string;
        @Column() domain: string;

        static fromCreateDto(dto: TenantCreateDto): Tenant {
                const tenant = new Tenant();
                tenant.name = dto.name;
                tenant.code = dto.code;
                tenant.domain = dto.domain;
                return tenant;
              }
              
}
