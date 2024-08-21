import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() register: CreateUserDto) {
    return this.usersService.register(register);
  }

  @Post('login')
  async login(@Body() login: CreateUserDto) {
    return this.usersService.login(login);
  }
}
