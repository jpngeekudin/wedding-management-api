import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class InvitationCreateDto {
  @IsNotEmpty()
  @ApiProperty({ default: '68a49488e327f0165cc9b03c' })
  event: string;
}
