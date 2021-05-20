import { CreateCatDto } from './dto/create-cat.dto';
import { Body, Controller, Get, Post, Put, Delete, Param, Query, ValidationPipe, UseGuards } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor (private catsService: CatsService){}

  @Get()
  public getCats(){
    return this.catsService.getCats();
  }

  @Get(':id')
  public getCatById(@Param('id') id: string){
    return this.catsService.getCatById(id);
  }

  @Post()
  public createCat(@Body(new ValidationPipe) cat: CreateCatDto){
    return this.catsService.createCat(cat);
  }

  @Delete(':id')
  public deleteCat(@Param('id') id: string){
    return this.catsService.deleteCatById(id);
  }

  @Put(':id')
  public updateCatById(@Param('id') id: string, @Query() query){
    const propertyName = query.property_name
    const propertyValue = query.property_value
    return this.catsService.updateCatById(id, propertyValue, propertyName);
  }
}
