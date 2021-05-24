import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class CatInput {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  favorFood: string;
}
