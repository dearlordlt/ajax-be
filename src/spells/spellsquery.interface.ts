import { IRegexQuery } from 'src/types/types';

export interface ISpellQuery {
  schoolName?: string;
  name?: IRegexQuery;
  tier?: number;
  spellType?: number[];
  spellCost?: number[];
}
