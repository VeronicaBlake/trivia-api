import { ProxyState } from "../AppState.js";
import Game from "../Models/Game.js";
import { api } from "./AxiosService.js";

class GamesService {
constructor(){
    this.getAllGames()
    this.shuffleAns()
    }
    async getAllGames(url = ''){
        let res = await api.get(url)
        console.log(res.data.results)
        let game = res.data.results.map(g => new Game(g))
        
        ProxyState.game = game
    }
    async shuffleAns(){
        var currentIndex = ProxyState.answers, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

        return array;
    }
    
}


export const gameService = new GamesService