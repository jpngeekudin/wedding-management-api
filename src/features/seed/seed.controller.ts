import { Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { SeedService } from './seed.service';
import { Response } from 'express';

@Controller('seed')
export class SeedController {
  constructor(private seedService: SeedService) {}

  @Post('')
  async seed(@Res() res: Response) {
    try {
      const data = await this.seedService.seed();
      return res.send({ success: true, data });
    } catch (err) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ status: false, data: err });
    }
  }
}
