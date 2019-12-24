import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Skill } from './skills.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSkillDto } from './skills.dto';

@Injectable()
export class SkillsService {
  constructor(
    @InjectModel('Skill') private readonly skillModel: Model<Skill>,
  ) {}

  async create(createSkillDto: CreateSkillDto): Promise<Skill> {
    const createdSkill = new this.skillModel(createSkillDto);
    return await createdSkill.save();
  }

  async findAll(): Promise<Skill[]> {
    return await this.skillModel.find().exec();
  }
}
