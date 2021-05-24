import { Field, ID, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  favorFood: string;
}
