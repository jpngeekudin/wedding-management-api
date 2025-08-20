import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: AuthLoginDto, @Res() res: Response) {
    const data = await this.authService.login(loginDto);
    res.status(HttpStatus.OK).send({ data, status: true });
  }
}
