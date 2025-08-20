import { ApiProperty } from '@nestjs/swagger';

export class UserCreateDto {
  username: string;
  password: string;
}
