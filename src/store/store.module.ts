import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { StoreControllers } from './controllers';
import { Store, StoreSchema } from './model';
import { StoreServices } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
  ],
  controllers: [StoreControllers],
  providers: [StoreServices],
})
export class StoreModule {}
