import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class User {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop({ select: false })
  __v: number;
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
