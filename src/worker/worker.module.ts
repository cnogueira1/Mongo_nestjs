import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WorkerControllers } from './controllers';
import { Worker, WorkerSchema } from './model';
import { WorkerServices } from './services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
  ],
  controllers: [WorkerControllers],
  providers: [WorkerServices],
})
export class WorkerModule {}
