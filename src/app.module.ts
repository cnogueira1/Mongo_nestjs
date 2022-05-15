import { Module } from '@nestjs/common';

import { ClientModule } from './client/client.module';
import { DataBaseModule } from './database/database.module';

@Module({
  imports: [DataBaseModule, ClientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
