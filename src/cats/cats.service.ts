import { CatInput } from './inputs/cat.input';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CatEntity } from './cat.entity'
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CatDto, CreateUpdateCatDTO } from './dto/cat.dto';
@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(CatEntity)
    private catRepo: Repository<CatEntity>,
  ) {}

  async cat(id): Promise<CatDto>   {
    const cat = await this.catRepo.findOne(id);
    if (cat) {
      return cat;
    }
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }

  async cats() {
    return this.catRepo.find();
  }
  

  async createCat(cat: CreateUpdateCatDTO) {
    const newCat = await this.catRepo.create(cat);
    await this.catRepo.save(newCat);
    return newCat;
  }

  async updateCat(id: number, cat: CatInput) {
    cat = JSON.parse(JSON.stringify(cat))
    await this.catRepo.update(id, cat);
    const updatedCat = await this.catRepo.findOne(id);
    if (updatedCat) {
      return updatedCat
    }
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }

  async deleteCat(id: number) {
    const deleteResponse = await this.catRepo.delete(id);
    
    if (!deleteResponse.affected) {
      throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
    return new HttpException('Success', HttpStatus.OK);
  }
}

