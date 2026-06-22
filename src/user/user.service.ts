import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BadRequestException } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    private readonly userModel: any,
  ) {}

  async create(data: CreateUserDto) {
    const existe = await this.userModel.findOne({
      email: data.email,
    });

    if (existe) {
      throw new BadRequestException('Email já cadastrado');
    }

    const senhaHash = await bcrypt.hash(data.senha, 10);

    return this.userModel.create({
      ...data,
      senha: senhaHash,
    });
  }

  findAll() {
    return this.userModel.find();
  }

  findOne(id: string) {
    return this.userModel.findById(id);
  }

  update(id: string, data: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, data, { new: true });
  }

  remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email });
  }
}
