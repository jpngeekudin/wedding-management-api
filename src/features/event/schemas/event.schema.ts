import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Event {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now() })
  startDate: number;

  @Prop({ default: Date.now() })
  endDate: number;

  @Prop({ default: Date.now() })
  createdAt: number;
}

export type EventDocument = Event & Document;
export const EventSchema = SchemaFactory.createForClass(Event);