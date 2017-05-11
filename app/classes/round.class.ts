import { RoundRow } from './round-row.class'
import { PlayerRow } from './player-row.class'

export class Round {
  id: number;
  correctRows: RoundRow[];
  playerRows: PlayerRow[];
  roundNumber: number;
  roundName: number;
  season: number;
}
