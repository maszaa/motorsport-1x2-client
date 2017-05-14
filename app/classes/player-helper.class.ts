import { Player } from './player.class'
import { PlayerRow } from './player-row.class'

export class PlayerHelper {
  players: Player[];
  roundPlayers: Player[];
  playerRows: PlayerRow[];

  private createPlayersFromPlayerRows(players: Player[], playerRows: PlayerRow[]): Promise<Player[]> {
    this.players = players;
    this.playerRows = playerRows;
    let roundPlayers: Player[] = new Array();
    for (let playerRow of this.playerRows) {
      let player = roundPlayers.find(player => player.id === playerRow.player)
      if (!player) {
        let player = this.players.find(player => player.id === playerRow.player);
        let roundPlayer: Player = {
          id: player.id,
          name: player.name,
          points: 0,
          qualifyingPoints: 0,
          racePoints: 0,
          competitionId: playerRow.competition,
          rows: new Array()
        };
        roundPlayers.push(roundPlayer);
      }
      player = roundPlayers.find(player => player.id === playerRow.player)
      player.points += playerRow.pointsFromRow;
      if (playerRow.rowType == 'Qualifying') {
        player.qualifyingPoints = playerRow.pointsFromRow;
      }
      else if (playerRow.rowType == 'Race') {
        player.racePoints = playerRow.pointsFromRow;
      }
    }
    return Promise.resolve(roundPlayers);
  }

  orderPlayers(players: Player[], playerRows: PlayerRow[]): Promise<Player[]> {
    return this.createPlayersFromPlayerRows(players, playerRows)
        .then(roundPlayers => {
          this.roundPlayers = roundPlayers.sort((a, b) => {
            if (a.points > b.points) {
              return -1;
            }
            else if (a.points < b.points) {
              return 1;
            }
            else {
              if (a.racePoints > b.racePoints) {
                return -1;
              }
              else if (a.racePoints < b.racePoints) {
                return 1;
              }
              else {
                if (a.name > b.name) {
                  return 1;
                }
                else if (a.name < b.name) {
                  return -1;
                }
              }
            }
          });
          return Promise.resolve(this.roundPlayers);
        });
  }
}
