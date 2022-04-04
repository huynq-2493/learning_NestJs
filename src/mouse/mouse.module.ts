import { MouseEntity } from './mouse.entity';
import { Module } from '@nestjs/common';
import { MouseService } from './mouse.service';
import { MouseController } from './mouse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MouseEntity])],
  providers: [MouseService],
  controllers: [MouseController]
})
export class MouseModule {}
