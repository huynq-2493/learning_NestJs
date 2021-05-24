import { CatInput } from './inputs/cat.input';
import { CatType } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
@Resolver(of => CatType)
export class CatsResolver {
  constructor(
    private catsService: CatsService
  ){}

  @Query(()=> [CatType])
  async cats() {
    return this.catsService.getCats();
  }

  @Query(()=> CatType)
  async cat(@Args('id') id: string) {
    return this.catsService.getCatById(id);
  }

  @Mutation(()=> [CatType])
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.createCat(input);
  }

  @Mutation(()=> [CatType])
  async delete(@Args('id') id: string) {
    return this.catsService.deleteCatById(id);
  }

  @Mutation(()=> [CatType])
  async update(@Args('input') input: CatInput) {
    return this.catsService.updateCatById(input.id, input);
  }
}