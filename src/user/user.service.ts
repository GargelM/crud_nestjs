import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){}

  async create(createUserDto: CreateUserDto) {
    const data: Prisma.UserCreateInput = {
      ...createUserDto, 
    };

  const userCreated = await this.prisma.user.create({data});

  return userCreated;

  }

  async findAll() {
    const find = await this.prisma.user.findMany();
    return find ;
  }

  async findOne(id: number) {
    return await this.prisma.user.findUnique({where :{ id: id}});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...updateUserDto,
    };
    return await this.prisma.user.update({where:{id: id}, data});
    
  }

  async remove(id: number) {
    await this.prisma.user.delete({where: {id: id}});

    return `Usuário ${id} foi removido com sucesso!`;
  }
}
