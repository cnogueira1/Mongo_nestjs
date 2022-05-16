import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:07101997@cluster0.qsw0j.mongodb.net/users?retryWrites=true&w=majority',
    ),
  ],
})
export class DataBaseModule {}
