import { ProxyState } from "../AppState.js";
import Game from "../Models/Game.js";
import { api } from "./AxiosService.js";

class GamesService {
constructor(){
    this.getAllGames()
    }
    async getAllGames(url = ''){
        let res = await api.get(url)
        console.log(res.data.results)
        let game = res.data.results.map(g => new Game(g))
        
        ProxyState.game = game
    }
}


export const gameService = new GamesService