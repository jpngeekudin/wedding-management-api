import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { InvitationService } from './invitation.service';
import { InvitationCreateDto } from './dto/invitation-create.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { InvitationAddPhotosDto } from './dto/invitation-add-photos.dto';
import { EventService } from '../event/event.service';

@Controller('invitation')
export class InvitationController {
  constructor(
    private invitationService: InvitationService,
    private eventService: EventService,
  ) {}

  @Get('get')
  async getInvitation(@Res() response: Response) {
    const data = await this.invitationService.findAll();
    return response.send({ success: true, data });
  }

  @Post('create')
  async createInvitation(
    @Body() body: InvitationCreateDto,
    @Res() response: Response,
  ) {
    const event = await this.eventService.findById(body.event);
    if (!event) {
      throw new NotFoundException('Event not found');
    }

    const data = await this.invitationService.create(body);
    return response.send({ success: true, data });
  }

  @Post('add-photos')
  @UseInterceptors(FilesInterceptor('files'))
  async addPhotos(
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Body() body: InvitationAddPhotosDto,
    @Res() response: Response,
  ) {
    console.log('body', body);
    console.log(
      'files',
      files.map((f) => f.path),
    );
    return response.send({ status: true });
  }
}
