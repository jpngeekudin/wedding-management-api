import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGuestDto } from './dto/create-guest.dto';
import { Guest, GuestDocument } from './schemas/guest.schema';
import { Event, EventDocument } from '../event/schemas/event.schema';
import * as mongoose from 'mongoose';
import { EventService } from '../event/event.service';

@Injectable()
export class GuestService {
  constructor(
    @InjectModel(Guest.name)
    private guestModel: Model<GuestDocument>,
    private eventService: EventService,
  ) {}

  async findAll() {
    return this.guestModel.find().populate('event').exec();
  }

  async create(guest: CreateGuestDto) {
    const existingEvent = await this.eventService.findById(guest.event);
    if (!existingEvent) throw 'Event Id not exists';
    const createdGuest = new this.guestModel(guest);
    return createdGuest.save();
  }

  async delete(id: string) {
    let objId = new mongoose.Types.ObjectId(id);
    return this.guestModel.findOneAndDelete({ _id: objId });
  }
}
