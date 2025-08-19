import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as moment from 'moment';
import { Document } from 'mongoose';

@Schema()
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({ default: moment().startOf('day').valueOf() })
  startDate: number;

  @Prop({ default: moment().endOf('day').valueOf() })
  endDate: number;

  @Prop({ required: true })
  groomName: string;

  @Prop({ required: true })
  brideName: string;

  @Prop({ required: true })
  address: string;

  @Prop({ default: Date.now() })
  createdAt: number;

  @Prop({ select: false })
  __v: number;
}

export type EventDocument = Event & Document;
export const EventSchema = SchemaFactory.createForClass(Event);
