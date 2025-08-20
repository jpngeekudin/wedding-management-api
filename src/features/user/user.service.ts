import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { UserCreateDto } from './dto/user-create.dto';
import { hashString } from 'src/helpers/security.helper';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async findByUsername(username: string) {
    return this.userModel.findOne({ username });
  }

  async createBulk(userDtos: UserCreateDto[]) {
    for (const userDto of userDtos) {
      const existingUsername = await this.userModel.findOne({
        username: userDto.username,
      });
      if (!!existingUsername)
        throw `User with username ${userDto.username} already exists`;
    }

    for (const dto of userDtos) {
      dto.password = await hashString(dto.password);
    }

    return this.userModel.create(userDtos);
  }

  async empty() {
    return this.userModel.deleteMany({});
  }
}
