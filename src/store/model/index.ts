import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Store extends Document {
  @Prop()
  name: string;

  @Prop()
  location: string;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
