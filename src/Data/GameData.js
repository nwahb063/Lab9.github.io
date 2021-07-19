import games from './games.json';

export default class GameData {
    static getGames() {
        return games ? games : [];
    }
}