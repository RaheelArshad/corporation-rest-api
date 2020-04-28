import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { InterestModule } from './interest/interest.module';
import { UserModule } from './user/user.module';
import { Interest } from './entity/interest.entity';
import { UserInterestModule } from './user-interest/user-interest.module';
import { UserInterestEntity } from './entity/user-interest-entity';
import { UserClaimModule } from './user-claim/user-claim.module';
import { UserClaim } from './entity/user-claim.entity';
@Module({
  imports: [ConfigModule.forRoot(),
    TypeOrmModule.forRoot({ 
      name:"default",    
      type: "mongodb",
      host: "localhost",
      port: 27017,
      database: "testDb",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      entities: [Interest,User,UserInterestEntity, UserClaim],
      migrations: ['src/migration/**/*.ts'],
      subscribers: ['src/subscriber/**/*.ts'] ,
     cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
    }),       
       InterestModule,
       UserModule,       
       UserInterestModule,
       UserClaimModule      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
