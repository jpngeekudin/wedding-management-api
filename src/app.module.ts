import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './features/guest/guest.module';
import { EventModule } from './features/event/event.module';
import { SeedModule } from './features/seed/seed.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/numpang'),
    GuestModule,
    EventModule,
    SeedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
