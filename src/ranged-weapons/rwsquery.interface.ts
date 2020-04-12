import { RANGED_WEAPONSTYPE, RANGE_STR_MULTIPLIER, IRegexQuery } from "src/types/types";

export interface IRWsquery {
    name?: IRegexQuery;
    weaponType?: RANGED_WEAPONSTYPE;
    rangeType?: RANGE_STR_MULTIPLIER;
    range?: number;
    strRequirement?: number;
    weight?: number;
  }
