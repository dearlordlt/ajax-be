import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Skill } from './skills.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SkillDto } from './skills.dto';
import { DeleteResponse } from 'src/types/types';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill') private readonly skillModel: Model<Skill>,
  ) {}

  async create(skillDto: SkillDto): Promise<Skill> {
    const createdSkill = new this.skillModel(skillDto);
    return await createdSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillModel.find().exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.skillModel.deleteOne( {_id: id} );
 }

 async update(id: string, skillDto: SkillDto): Promise<Skill> {
  return await this.skillModel.findByIdAndUpdate(id, skillDto, {new: true});
}
}
