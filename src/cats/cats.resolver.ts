import { CatDto } from './dto/cat.dto';
import { CatsService } from './cats.service';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CatInput } from './inputs/cat.input';

@Resolver('Cat')
export class CatsResolver {
  constructor(
    private readonly catsService: CatsService
  ) {}

  @Query(() => String)
  async hello(): Promise<string> {
    return 'Hello world!';
  }

  @Query(() => CatDto)
  async cat(@Args('id') id: number){
    return this.catsService.cat(id);
  }

  @Query(() => [CatDto])
  async cats(){
    return this.catsService.cats();
  }

  @Mutation(()=> CatDto)
  async createCat(@Args('cat') cat: CatInput) {
    return this.catsService.createCat(cat);
  }

  @Mutation(()=> CatDto)
  async updateCat(
    @Args('id') id: number,
    @Args('cat') cat: CatInput
  ) {
    console.log(cat);
    return this.catsService.updateCat(id, cat);
  }

  @Mutation(()=> CatDto)
  async deleteCat(@Args('id') id: number) {
    return this.catsService.deleteCat(id);
  }
}
