import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: AuthLoginDto) {
    const user = await this.userService.findByUsername(loginDto.username);
    if (!user) throw new UnauthorizedException('User not found');
    if (user.password !== loginDto.password)
      throw new UnauthorizedException('Wrong password');
    user.password = undefined;
    const payload = { ...user };
    return {
      accessToken: await this.jwtService.signAsync(payload),
    };
  }
}
