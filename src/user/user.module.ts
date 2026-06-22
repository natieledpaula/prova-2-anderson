// Implemente um código onde tinha os métodos de Login, criação e Consulta de Usuários.
// Ele deve conter o método de autenticação
// deverá realizar a liberação do CORS
// Deverá ter a documentação de todos os end-points existentes no sistema
// Deverá ser implementado através de serviços
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
