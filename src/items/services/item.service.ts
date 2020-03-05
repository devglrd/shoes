import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { ItemModel } from '../models/items.model';
import { Shoes } from '../../seed/seeds.service';
import { Connection } from 'mongoose';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel('Shoes') private readonly model: Model<Shoes>,
    @InjectConnection() private readonly connection: Connection,
  ) {

  }

  async get(): Promise<ItemModel[]> {
    return await this.model.find().exec();
  }

  async create(model: ItemModel): Promise<ItemModel> {
    const item = new this.model(model);
    return await item.save();
  }

  async update(id: string, model: ItemModel): Promise<ItemModel> {
    return await this.model.findByIdAndUpdate(id, model);
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.model.findOneAndDelete(id);
      return true;
    } catch (e) {
      return e;
    }
  }
}
