import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  @ApiProperty({ default: 'Agus' })
  name: string;

  @ApiProperty({ default: '089758293756' })
  phone?: string;

  @ApiProperty({ default: 'agusmantap07' })
  telegram?: string;

  @IsEmail()
  @ApiProperty({ default: 'agusmantap07@example.com' })
  email?: string;

  @IsNotEmpty()
  @ApiProperty({ default: '68a49488e327f0165cc9b03c' })
  event: string;
}
