import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Query,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateEventDto } from './dto/event.dto';
import { EventService } from './event.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('event')
export class EventController {
  constructor(private eventService: EventService) {}

  @Get('get')
  async getEvent() {
    let data = await this.eventService.findAll();
    return { success: true, data };
  }

  @Post('create')
  async createEvent(@Body() body: CreateEventDto, @Res() response: Response) {
    if (!body.name) response.status(HttpStatus.BAD_GATEWAY).send();
    let data = await this.eventService.create(body);
    return response.send({ success: true, data });
  }

  @Delete('delete')
  async deleteEvent(@Query('id') id: string) {
    let data = await this.eventService.delete(id);
    return { success: true, data };
  }
}
