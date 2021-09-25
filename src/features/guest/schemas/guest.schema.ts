import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type GuestDocument = Guest & Document;

@Schema()
export class Guest {

  @Prop({ required: true })
  name: string;

  @Prop({ default: '' })
  email: string;

  @Prop({ default: '' })
  phone: string;

  @Prop({ default: '' })
  whatsapp: string;

  @Prop({ default: '' })
  telegram: string;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);