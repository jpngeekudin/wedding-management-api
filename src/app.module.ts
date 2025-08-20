import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuestModule } from './features/guest/guest.module';
import { EventModule } from './features/event/event.module';
import { SeedModule } from './features/seed/seed.module';
import { AuthModule } from './features/auth/auth.module';
import { UserModule } from './features/user/user.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/numpang'),
    GuestModule,
    EventModule,
    SeedModule,
    AuthModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
