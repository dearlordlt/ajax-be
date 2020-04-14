import { IRegexQuery } from '../types/types';

export interface IShieldsQuery {
   name?: IRegexQuery;
   weight?: number;
   defence?: number;
   hp?: number;
}
