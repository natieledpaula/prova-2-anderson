import {
    Controller,
    Post,
    Get,
    Param,
    Put,
    Delete,
    Body,
} from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// Controlador para gerenciar as rotas relacionadas aos usuários
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    // Rota para criar um novo usuário
    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    // Rota para obter todos os usuários
    @Get()
    findAll() {
        return this.userService.findAll();
    }

    // Rota para obter um usuário específico pelo ID
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.userService.findOne(id);
    }

    // Rota para atualizar um usuário específico pelo ID
    @Put(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(id, updateUserDto);
    }

    // Rota para remover um usuário específico pelo ID
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}