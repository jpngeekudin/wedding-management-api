import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { EventModule } from '../event/event.module';
import { GuestModule } from '../guest/guest.module';
import { SeedController } from './seed.controller';
import { UserModule } from '../user/user.module';

@Module({
  providers: [SeedService],
  imports: [EventModule, GuestModule, UserModule],
  controllers: [SeedController]
})
export class SeedModule {}
