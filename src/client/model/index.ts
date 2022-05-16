import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Client extends Document {
  @Prop({
    _id: true,
  })
  id: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  nameUser: string;

  @Prop()
  nameComplet: string;

  @Prop()
  contact: string;

  @Prop()
  contactType: string;

  @Prop()
  address: string;

  @Prop()
  dateBirth: Date;

  @Prop()
  password: string;

  @Prop([String])
  list: string[];

  @Prop([{ name: String }])
  listas: string[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
