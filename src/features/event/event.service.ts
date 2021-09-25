import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateEventDto } from './dto/event.dto';
import { Event, EventDocument } from './schemas/event.schema';

@Injectable()
export class EventService {

  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<EventDocument>
  ) { }

  async findAll() {
    return this.eventModel.find();
  }

  async create(eventDto: CreateEventDto) {
    const createdEvent = new this.eventModel(eventDto);
    return createdEvent.save();
  }

  async delete(id: string) {
    let objId = new Types.ObjectId(id);
    return this.eventModel.findOneAndDelete({ _id: objId });
  }
}
