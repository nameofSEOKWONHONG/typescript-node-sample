import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreadController } from './contoller/bread.controller';
import { Bread } from './entity/bread';
import { Comment } from './entity/comment';
import { BreadService } from './service/bread.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: 0,
      username: '',
      password: '',
      database: '',
      entities: [Bread, Comment],
      synchronize: true,
      logging:true,
      subscribers:[],
      migrations:[],
      migrationsRun:false,      
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
