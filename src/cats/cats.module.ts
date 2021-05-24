import { CatsService } from './cats.service';
import { CatsResolver } from './cats.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [CatsResolver, CatsService]
})
export class CatsModule {}
