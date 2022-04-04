import { MouseService } from './mouse.service';
import { Controller, Get } from '@nestjs/common';
import { MouseEntity } from './mouse.entity';

@Controller('mouse')
export class MouseController {
  constructor(
    private mouseService: MouseService,
  ) { }

  @Get()
  async findAll(): Promise<MouseEntity[]> {
    return await this.mouseService.findAll();
  }

}
