import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Guest, GuestSchema } from './schemas/guest.schema';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Guest.name, schema: GuestSchema }])],
  providers: [GuestService],
  controllers: [GuestController]
})
export class GuestModule {}
