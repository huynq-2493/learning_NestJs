import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsResolver } from './cats.resolver';
import { CatsService } from './cats.service';
import { CatEntity } from './cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
