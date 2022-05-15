import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ClientCrontollers } from './controllers';
import { Client, ClientSchema } from './model';
import { ClientServices } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Client.name, schema: ClientSchema }]),
  ],
  controllers: [ClientCrontollers],
  providers: [ClientServices],
})
export class ClientModule {}
