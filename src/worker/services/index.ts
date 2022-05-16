import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, UpdateWriteOpResult } from 'mongoose';
import { Worker } from '../model';

@Injectable()
export class WorkerServices {
  constructor(
    @InjectModel(Worker.name)
    private workerModel: Model<Worker>,
  ) {}

  async getAll(): Promise<Worker[]> {
    return this.workerModel.find();
  }

  async getOne(id: string): Promise<Worker> {
    return this.workerModel.findById(id);
  }

  async post(worker: Worker): Promise<Worker> {
    return this.workerModel.create(worker);
  }

  async put(worker: Worker): Promise<UpdateWriteOpResult> {
    return this.workerModel.updateOne({ id: worker.id }, worker);
  }

  async delete(id: string): Promise<void> {
    const worker = await this.getOne(id);
    this.workerModel.deleteOne({ id: worker.id });
  }

  // Find all with match name search
  async findAllByName(name: string): Promise<Worker[]> {
    const worker = await this.workerModel.find({
      where: {
        name: '%' + name + '%',
      },
    });

    return worker;
  }

  // Find all with match service search
  async findAllByService(service: string): Promise<Worker[]> {
    const worker = await this.workerModel.find({
      where: {
        tasks: '%' + service + '%',
      },
    });

    return worker;
  }
}
