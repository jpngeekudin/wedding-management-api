import { Injectable } from '@nestjs/common';  
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateGuestDto } from './dto/create-guest.dto';
import { Guest, GuestDocument } from './schemas/guest.schema';
import * as mongoose from 'mongoose';

@Injectable()
export class GuestService {

  constructor(
    @InjectModel(Guest.name)
    private guestModel: Model<GuestDocument>
  ) { }

  async findAll() {
    return this.guestModel.find().exec();
  }

  async create(guest: CreateGuestDto) {
    const createdGuest = new this.guestModel(guest);
    return createdGuest.save();
  }

  async delete(id: string) {
    let objId = new mongoose.Types.ObjectId(id);
    return this.guestModel.findOneAndDelete({ _id: objId});
  }
}
