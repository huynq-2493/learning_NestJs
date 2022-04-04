import { MouseEntity } from './mouse.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MouseService {
  constructor(
    @InjectRepository(MouseEntity)
    private mouseRepo: Repository<MouseEntity>,
  ) { }

  findAll() {
    return this.mouseRepo.find();
  }
}
