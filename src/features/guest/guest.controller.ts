import { Body, Controller, Delete, Get, HttpStatus, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateGuestDto } from './dto/create-guest.dto';
import { GuestService } from './guest.service';

@Controller('guest')
export class GuestController {

  constructor(private guestService: GuestService) { }

  @Get('get')
  async getGuest() {
    let data = await this.guestService.findAll();
    return { success: true, data };
  }

  @Post('create')
  async createGuest(@Body() createGuestDto: CreateGuestDto, @Res() res: Response) {
    if (!createGuestDto.name) {
      res
        .status(HttpStatus.BAD_REQUEST)
        .send();
    }

    let data = await this.guestService.create(createGuestDto);
    return res.send({ success: true, data });
  }

  @Delete('delete')
  async deleteGuest(@Query('id') id: string) {
    let data = await this.guestService.delete(id);
    return { success: true, data };
  }
}
