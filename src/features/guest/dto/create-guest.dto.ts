import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  name: string;
  phone?: string;
  telegram?: string;

  @IsEmail()
  email?: string;

  @IsNotEmpty()
  event: string;
}
