import { Body, Controller, HttpStatus, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDto } from './dto/auth-login.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  async login(@Body() loginDto: AuthLoginDto, @Res() res: Response) {
    try {
      const data = await this.authService.login(loginDto);
      res.send({ data, status: true });
    } catch (err) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send({ data: err, status: false });
    }
  }
}
