import { Injectable } from '@nestjs/common';
import { EventService } from '../event/event.service';
import moment from 'moment';

@Injectable()
export class SeedService {
  constructor(private readonly eventService: EventService) {}

  async seed() {
    const events = await this.eventService.createBulk(
      [
        { groom: 'Ujang', bride: 'Jokowati', daysToGo: 7 },
        { groom: 'Burhan', bride: 'Munaroh', daysToGo: 14 },
        { groom: 'Rizky', bride: 'Siti', daysToGo: 32 },
      ].map((e) => ({
        name: `Wedding of ${e.groom} & ${e.bride}`,
        groomName: e.groom,
        brideName: e.bride,
        address:
          'Jl. Panjang No.2, RT.19/RW.4, Kedoya Sel., Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11520',
        addressLng: 106.696203,
        addressLat: -6.272331,
        phone: '089562837561',
        startDate: moment().add(e.daysToGo, 'days').startOf('days').valueOf(),
        endDate: moment().add(e.daysToGo, 'days').endOf('days').valueOf(),
      })),
    );
  }
}
