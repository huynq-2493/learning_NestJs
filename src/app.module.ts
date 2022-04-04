import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatModule } from './cat/cat.module';
import { MouseModule } from './mouse/mouse.module';

@Module({
  imports: [TypeOrmModule.forRoot(), CatModule, MouseModule],
})
export class AppModule {}
