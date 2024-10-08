import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength, Validate } from 'class-validator';
import { ConfirmPassword } from '../validate/confirm-password.constraint';
import { UserEmailAlreadyExists } from '../validate/user-email-already-exists.constraint';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Nome do usuário',
    default: 'Nome teste',
  })
  @IsString({ message: 'O campo de nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de nome é obrigatório.' })
  @MinLength(3, { message: 'O campo de nome precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de nome pode ter no máximo 50 caracteres.' })
  username: string;

  @ApiProperty({
    description: 'Email do usuário',
    default: 'email@teste.com',
  })
  @Validate(UserEmailAlreadyExists, { message: 'Já existe um usuário com este email.' })
  @IsString({ message: 'O campo de email precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de email é obrigatório.' })
  @IsEmail({}, { message: 'O email precisa ser válido.' })
  @MinLength(3, { message: 'O campo de email precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de email pode ter no máximo 50 caracteres.' })
  email: string;

  @ApiProperty({
    description: 'Senha do usuário',
    default: '11111111111',
  })
  @IsString({ message: 'O campo de senha precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de senha é obrigatório.' })
  @MinLength(3, { message: 'O campo de senha precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de senha pode ter no máximo 50 caracteres.' })
  password: string;

  @ApiProperty({
    description: 'Confirmação de senha do usuário',
    default: '11111111111',
  })
  @Validate(ConfirmPassword, { message: 'Os campos de senha e confirmar senha devem coincidir.' })
  @IsString({ message: 'O campo de confirmar senha precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de confirmar senha é obrigatório.' })
  @MinLength(3, { message: 'O campo de confirmar senha precisa ter pelo menos 3 caracteres.' })
  @MaxLength(50, { message: 'O campo de confirmar senha pode ter no máximo 50 caracteres.' })
  confirmPassword: string;
}
