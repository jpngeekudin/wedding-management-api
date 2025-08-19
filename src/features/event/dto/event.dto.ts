import { IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  groomName: string;

  @IsNotEmpty()
  brideName: string;

  @IsNotEmpty()
  address: string;

  startDate?: number;
  endDate?: number;
}
