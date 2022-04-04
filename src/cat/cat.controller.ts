import { CatService } from './cat.service';
import { Controller, Get } from '@nestjs/common';
import { CatEntity } from './cat.entity';

@Controller('cats')
export class CatController {
  constructor(
    private catService: CatService,
  ) { }

  @Get()
  async findAll(): Promise<CatEntity[]> {
    return await this.catService.findAll();
  }

  @Get('/manual')
  async findAllManual(): Promise<CatEntity[]> {
    return await this.catService.findAllByInjectManual();
  }
}