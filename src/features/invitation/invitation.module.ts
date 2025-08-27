import { Module } from '@nestjs/common';
import { InvitationController } from './invitation.controller';
import { InvitationService } from './invitation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Invitation, InvitationSchema } from './schemas/invitation.schema';
import { EventModule } from '../event/event.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import * as  moment from 'moment';

@Module({
  controllers: [InvitationController],
  providers: [InvitationService],
  imports: [
    MongooseModule.forFeature([
      { name: Invitation.name, schema: InvitationSchema },
    ]),
    MulterModule.register({
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const filename = `${moment().format('YYMMDD')}_${file.originalname}`;
          cb(null, filename);
        },
      }),
    }),
    EventModule,
  ],
})
export class InvitationModule {}
