import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CatEntity } from './cat.entity';


@Injectable()
export class CatService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepo: Repository<CatEntity>,

    @Inject('CAT_REPOSITORY')
    private catRepository: Repository<CatEntity>,
  ) { }

  findAll(): Promise<CatEntity[]> {
    return this.catRepo.find();
  }

  findAllByInjectManual(): Promise<CatEntity[]> {
    return this.catRepository.find();
  }
}