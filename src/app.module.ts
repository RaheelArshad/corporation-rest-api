import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interest } from './entity/interest.entity';
import { User } from './entity/user.entity';
import { UserInterest } from './entity/user-interest.entity';
import { InterestModule } from './interest/interest.module';
import { UserModule } from './user/user.module';
import { UserInterestModule } from './user-interest/user-interest.module';

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
      entities: [Interest,User,UserInterest],
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
       UserInterestModule
      
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
