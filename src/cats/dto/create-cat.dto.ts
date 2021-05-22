import { CATS } from './../cats.mock';
import { IsString, IsInt, IsNotEmpty, Validate } from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  @Validate(Unique, [CATS])
  id: string;

  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  favorFood: string;
}

function Unique(Unique: any, arg1: { id: number; age: number; color: string; favorFood: string; }[][]) {
  throw new Error('the cat already exist');
}
