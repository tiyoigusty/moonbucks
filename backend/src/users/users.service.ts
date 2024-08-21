import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async register(register: CreateUserDto) {
    try {
      const hashedPassword = await new Promise<string>(function (
        resolve,
        reject,
      ) {
        bcrypt.hash(register.password, 10, async function (error, hashed) {
          if (error) {
            reject(new Error('error hashing'));
          } else {
            resolve(hashed);
          }
        });
      });

      const user = await this.prisma.user.create({
        data: {
          ...register,
          password: hashedPassword,
        },
      });

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }

  async login(login: CreateUserDto) {
    try {
      const user = await this.prisma.user.findUnique({
        where: { email: login.email },
      });
      if (!user) throw new Error('User Not Found!');

      const validPassword = await bcrypt.compare(login.password, user.password);
      if (!validPassword) throw new Error('Wrong Password');

      delete user.password;

      const secret = process.env.JWT_SECRET;

      const token = jwt.sign(user, secret);

      return { user, token };
    } catch (error) {
      throw new Error(error);
    }
  }
}
