import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Client } from '../model';

@Injectable()
export class ClientServices {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<Client>,
  ) {}

  async getAll(): Promise<Client[]> {
    const clients = this.clientModel.find();
    return clients;
  }

  async getOne(id: string): Promise<Client> {
    return this.clientModel.findById(id);
  }

  async post(client: Client): Promise<Client> {
    return this.clientModel.create(client);
  }

  async put(client: Client) {
    return this.clientModel.updateOne({ id: client.id }, client);
  }

  async delete(id: string) {
    const client = await this.getOne(id);
    this.clientModel.deleteOne({ id: client.id });
  }
}
