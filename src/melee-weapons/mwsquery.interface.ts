import { IRegexQuery } from 'src/types/types';

export interface IMWQuery {
    name?: IRegexQuery;
    range?: number[];
    strRequirement?: number;
    weight?: number;
    weaponSkills?: IRegexQuery;
 }
