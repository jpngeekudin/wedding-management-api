import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateEventDto } from './dto/event.dto';
import { Event, EventDocument } from './schemas/event.schema';
import moment from 'moment';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event.name)
    private eventModel: Model<EventDocument>,
  ) {}

  async findAll() {
    return this.eventModel.find();
  }

  async findById(id: string) {
    return this.eventModel.findById(id);
  }

  async create(eventDto: CreateEventDto) {
    try {
      const createdEvent = new this.eventModel(eventDto);
      return await createdEvent.save();
    } catch (err) {
      throw err;
    }
  }

  async createBulk(eventDtos: CreateEventDto[]) {
    return this.eventModel.create(eventDtos);
  }

  async delete(id: string) {
    let objId = new Types.ObjectId(id);
    return this.eventModel.findOneAndDelete({ _id: objId });
  }
}
