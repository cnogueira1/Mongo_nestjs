import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, UpdateWriteOpResult } from 'mongoose';

import { Store } from '../model';

@Injectable()
export class StoreServices {
  constructor(
    @InjectModel(Store.name)
    private storeModel: Model<Store>,
  ) {}

  async getAll(): Promise<Store[]> {
    return this.storeModel.find();
  }

  async getOne(id: string): Promise<Store> {
    return this.storeModel.findById(id);
  }

  async post(store: Store): Promise<Store> {
    return this.storeModel.create(store);
  }

  async put(store: Store): Promise<UpdateWriteOpResult> {
    return this.storeModel.updateOne({ id: store.id }, store);
  }

  async delete(id: string): Promise<void> {
    const store = await this.getOne(id);
    this.storeModel.deleteOne({ id: store.id });
  }
}
