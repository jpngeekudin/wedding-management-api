import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { Invitation, InvitationDocument } from './schemas/invitation.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { InvitationCreateDto } from './dto/invitation-create.dto';
import fs from 'fs/promises';
import path from 'path';
import { InvitationAddPhotosDto } from './dto/invitation-add-photos.dto';

@Injectable()
export class InvitationService {
  constructor(
    @InjectModel(Invitation.name)
    private invitationModel: Model<InvitationDocument>,
  ) {}

  async findAll() {
    return this.invitationModel.find();
  }

  async create(invitationDto: InvitationCreateDto) {
    const existingInvitation = await this.invitationModel.findOne({
      event: invitationDto.event,
    });

    if (!!existingInvitation) {
      throw new HttpException('Invitation for this event already exists', 400);
    }

    const data = new this.invitationModel(invitationDto);
    return data.save();
  }

  async addPhotos(files) {
    console.log('files', files);
  }
}
