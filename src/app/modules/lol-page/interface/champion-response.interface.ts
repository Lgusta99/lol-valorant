import { Champion } from './champion.interface';

export interface ChampionResponse {
  type: string;
  format: string;
  version: string;
  data: {
    [key: string]: Champion;
  };
}
