import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Event } from '../../event/schemas/event.schema';

export type GuestDocument = Guest & Document;

@Schema()
export class Guest {
  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  telegram: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  event: Event;
}

export const GuestSchema = SchemaFactory.createForClass(Guest);
