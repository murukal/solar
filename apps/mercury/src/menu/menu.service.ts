import { Injectable } from '@nestjs/common';
import { CreateMenuInput } from './dtos/create-menu.input';
import { UpdateMenuInput } from './dtos/update-menu.input';

@Injectable()
export class MenuService {
  create(createMenuInput: CreateMenuInput) {
    return 'This action adds a new menu';
  }

  findAll() {
    return `This action returns all menu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuInput: UpdateMenuInput) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
