import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Worker extends Document {
  @Prop()
  name: string;

  @Prop()
  tasks: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
