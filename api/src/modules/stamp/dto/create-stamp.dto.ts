import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { StampNameAlreadyExists } from '../validate/stamp-name-already-exists.constraint';

export class CreateStampDto {
  @ApiProperty({
    description: 'Nome do Selo',
    default: 'Nome teste',
  })
  @Validate(StampNameAlreadyExists, {
    message: 'Já existe um selo com este nome.',
  })
  @IsString({ message: 'O campo de nome precisa ser uma string.' })
  @IsNotEmpty({ message: 'O campo de nome é obrigatório.' })
  @MinLength(3, {
    message: 'O campo de nome precisa ter pelo menos 3 caracteres.',
  })
  @MaxLength(50, {
    message: 'O campo de nome pode ter no máximo 50 caracteres.',
  })
  name: string;
}
