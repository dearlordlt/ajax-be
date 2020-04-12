import { IRegexQuery } from 'src/types/types';

export interface IMWsquery {
    name?: IRegexQuery;
    range?: number[];
    strRequirement?: number;
    weight?: number;
    weaponSkills?: IRegexQuery;
 }
