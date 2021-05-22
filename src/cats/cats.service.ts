import { Cat } from './interfaces/cat.interface';
import { CATS } from './cats.mock';
import { HttpException, Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  private cats = CATS

  public async getCats() {
    return this.cats;
  }

  public async getCatById(id: string): Promise<any> {
    const cat = this.cats.find((cat) => cat.id == id)
    
    if (!cat) {
      throw new HttpException('Not Found', 404);
    }
    return cat
  }

  public async createCat(cat: Cat) {
    this.cats.push(cat)
    return this.cats;
  }

  public async updateCatById(id: string, propertyValue: string, propertyName: string) {
    const index = this.cats.findIndex(cat => cat.id == id);
    
    if (index === -1) {
      throw new HttpException('Not Found', 404);
    }
    this.cats[index][propertyName] = propertyValue
    return this.cats[index];
  }

  public async deleteCatById(id: string) {
    const index = this.cats.findIndex(cat => cat.id == id);
    if (index === -1) {
      throw new HttpException('Not Found', 404);
    }
    this.cats.splice(index, 1);
    return this.cats;
  }
}
