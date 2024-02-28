import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

import { UserModule } from './mudules/user/user.module';
import { LocationModule } from './mudules/location/location.module';
import { UserEntity } from './mudules/user/entities/user.entity';
import { LocationEntity } from './mudules/location/entities/location.entity';
import { CommentModule } from './mudules/comment/comment.module';
import { CommentEntity } from './mudules/comment/entities/comment.entity';
import { AuthModule } from './mudules/auth/auth.module';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT ?? '5432'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      // options: {
      //   encrypt: false,
      // },
      synchronize: true,
      entities: [UserEntity, LocationEntity, CommentEntity],
    }),
    UserModule,
    LocationModule,
    CommentModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
