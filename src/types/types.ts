export interface  IRegexQuery   {
  $regex: string;
  $options: string;
}

export enum SKILL {
  COMBAT = 'COMBAT',
  SOCIAL = 'SOCIAL',
}

export enum ROLE {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export enum SPELL {
  NonCombat = 'NON-COMBAT',
  COMBAT = 'COMBAT',
  UTILITY = 'UTILITY',
  FORBIDDEN = 'FORBIDDEN',
  RITUAL = 'RITUAL',
  BLESSING = 'BLESSING',
}

export enum SPELL_COST_TYPE {
  NUMBER = 'NUMBER',
  PERCENTAGE = 'PERCENTAGE',
}

export enum MELLE_WEAPONS {
  DAGGER = 'COMBAT',
  SWORD = 'SWORD',
  RAPIER = 'RAPIER',
  MACES = 'MACES',
  AXES = 'AXES',
  SPEARS = 'SPEARS',
  POLEARM = 'POLEARM',
  FLAIL = 'FLAIL',
}

export enum RANGE_STR_MULTIPLIER {
  MULTIPLIER = 'MULTIPLIER',
  NUMBER = 'NUMBER',
}

export enum RANGED_WEAPONS_TYPE {
  THROWABLE = 'THROWABLE',
  BALISTIC = 'BALISTIC',
  BLACKPOWDER = 'BLACKPOWDER',
}

export interface DeleteResponse {
  n?: number;
  ok?: number;
  deletedCount?: number;
}
