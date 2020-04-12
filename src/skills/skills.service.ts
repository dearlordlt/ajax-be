import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ISkill } from './skills.interface';
import { InjectModel } from '@nestjs/mongoose';
import { SkillDto } from './skills.dto';
import { DeleteResponse } from 'src/types/types';
import { ISkillQuery } from './skillsquery.interface';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill') private readonly skillModel: Model<ISkill>,
  ) {}

  async create(skillDto: SkillDto): Promise<ISkill> {
    const createdSkill = new this.skillModel(skillDto);
    return await createdSkill.save();
  }

  async findAll(query: any): Promise<ISkill[]> {

    const skillQuery: ISkillQuery = {};

    if (query.name) {
      skillQuery.name = { $regex: query.name, $options: 'i'};
    }

    if (query.skillType) {
      skillQuery.skillType = query.skillType;
    }

    return await this.skillModel.find(skillQuery).exec();
  }

  async delete(id: string): Promise<DeleteResponse> {
    return await this.skillModel.deleteOne( {_id: id} );
 }

 async update(id: string, skillDto: SkillDto): Promise<ISkill> {
  return await this.skillModel.findByIdAndUpdate(id, skillDto, {new: true});
}
}
