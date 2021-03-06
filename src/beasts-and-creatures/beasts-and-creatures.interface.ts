import { Document } from 'mongoose';

export interface IBeastsAndCreatures extends Document {
  npc: string;
  attributes: IAttributes;
  talents: ITalents;
  stats: IStats;
  Abilities: string[];
  weight: string;
}

export interface IAttributes {
  str: number;
  dex: number;
  ref: number;
  hp: number;
  move: IMove;
}

export interface IMove {
  ground: number;
  flight: number;
}

export interface ITalents {
  sense: number;
  fitness: number;
  awareness: number;
  intelligence: number;
}

export interface IStats {
  att: number;
  def: number;
  DMG: string;
}
