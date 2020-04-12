import { SKILL, IRegexQuery } from '../types/types';

export interface ISkillQuery {
   name?: IRegexQuery;
   skillType?: SKILL;
}
