import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import * as moment from 'moment';

export class CreateEventDto {
  @IsNotEmpty()
  @ApiProperty({ default: 'Wedding of Ujang and Jokowati' })
  name: string;

  @IsNotEmpty()
  @ApiProperty({ default: 'Ujang' })
  groomName: string;

  @IsNotEmpty()
  @ApiProperty({ default: 'Jokowati' })
  brideName: string;

  @IsNotEmpty()
  @ApiProperty({
    default:
      'Jl. Panjang No.2, RT.19/RW.4, Kedoya Sel., Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11520',
  })
  address: string;

  @IsNotEmpty()
  @ApiProperty({ default: 106.696203 })
  addressLng: number;

  @IsNotEmpty()
  @ApiProperty({ default: -6.272331 })
  addressLat: number;

  @IsNotEmpty()
  @ApiProperty()
  phone: string;

  @ApiProperty({ default: moment().startOf('day').valueOf() })
  startDate?: number;

  @ApiProperty({ default: moment().endOf('day').valueOf() })
  endDate?: number;
}
