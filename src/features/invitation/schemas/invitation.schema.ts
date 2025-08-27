import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { Event } from 'src/features/event/schemas/event.schema';

@Schema()
export class Invitation {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'Event' })
  event: Event;

  @Prop({ default: [] })
  photos: string[];

  @Prop({ select: false })
  __v: number;
}

export type InvitationDocument = Invitation & Document;
export const InvitationSchema = SchemaFactory.createForClass(Invitation);
