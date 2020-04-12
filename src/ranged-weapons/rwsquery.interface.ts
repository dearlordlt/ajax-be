import { RANGED_WEAPONS_TYPE, RANGE_STR_MULTIPLIER, IRegexQuery } from 'src/types/types';

export interface IRWQuery {
    name?: IRegexQuery;
    weaponType?: RANGED_WEAPONS_TYPE;
    rangeType?: RANGE_STR_MULTIPLIER;
    range?: number;
    strRequirement?: number;
    weight?: number;
  }
