import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Guest, GuestSchema } from './schemas/guest.schema';
import { GuestService } from './guest.service';
import { GuestController } from './guest.controller';
import { EventService } from '../event/event.service';
import { EventModule } from '../event/event.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Guest.name, schema: GuestSchema }]),
    EventModule,
  ],
  providers: [GuestService],
  controllers: [GuestController],
})
export class GuestModule {}
