import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatDto {
  @Field(() => ID)
  id: number;
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field()
  breed: string;
}

@ObjectType()
export class CreateUpdateCatDTO {
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field()
  breed: string;
}
