import { Injectable, ConflictException, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from 'src/dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto/user.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService, private readonly jwtService:JwtService) {}

  async signin(dto: AuthDto) {
    const user = await this.validateUser(dto.email, dto.password);

    const payload = { sub: user.id, email: user.email };
    const accessToken = this.jwtService.sign(payload);

    return { accessToken, user };
  }

  async signup(dto: UserDto) {
    console.log(dto);
    
    try {
      // Check if the user with the given email already exists
      const existingUser = await this.prisma.user.findUnique({
        where: { email: dto.email },
      });

      if (existingUser) {
        throw new ConflictException('Email is already in use');
      }

      // Hash the user's password
      const hashedPassword = await bcrypt.hash(dto.password, 10);

      // Create a new user with the hashed password
      const newUser = await this.prisma.user.create({
        data: {
          email: dto.email,
          hash: hashedPassword,
          name:dto.name
        },
      });
      delete newUser.hash;

      return { newUser};
    } catch (error) {
      throw new InternalServerErrorException('Unable to process the request');
    }
  }
  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
  
    if (user && (await bcrypt.compare(password, user.hash))) {
      delete user.hash;
      return user;
    }
    throw new NotFoundException("User Not Found");
  }
  
  async validateUserById(userId: number): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });
  
    if (user) {
      delete user.hash;
      return user;
    }
    return null;
  }
}
