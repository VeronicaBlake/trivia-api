import { ProxyState } from "../AppState.js";
import { gameService } from "../Services/GamesServices.js";

//Private 
function _draw() {
    let game = ProxyState.game;
    let template = ''
    game.forEach(g => template += g.Template)
    document.getElementById("app").innerHTML = ` 
      <div>${template}</div>
  `
}

export default class GamesController{
    constructor(){
        ProxyState.on("game", _draw);
    }
        
    getAll(url){
        gameService.getAllGames(url)
    }

    shuffleAns(){
        gameService.shuffleAns
    }
}