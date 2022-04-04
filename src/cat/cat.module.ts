import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Connection } from 'typeorm';
import { CatEntity } from './cat.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CatEntity])],
  controllers: [CatController],
  providers: [
    CatService,
    {
      provide: 'CAT_REPOSITORY',
      useFactory: (connection: Connection) => connection.getRepository(CatEntity),
      inject: [Connection],
    } 
  ],
})
export class CatModule {}