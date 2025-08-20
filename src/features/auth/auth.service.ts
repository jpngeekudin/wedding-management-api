import { Injectable } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async login(loginDto: AuthLoginDto) {
    const user = await this.userService.findByUsername(loginDto.username);
    if (!user) throw 'User not found';
    if (user.password !== loginDto.password) throw 'Wrong password';
    return user;
  }
}
