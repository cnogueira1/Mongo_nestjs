import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
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

  @Prop(
    raw({
      firstName: { type: String },
      lastName: { type: String },
    }),
  )
  details: Record<string, any>;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
