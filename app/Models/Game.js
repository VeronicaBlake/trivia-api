export default class Game{
    constructor({question, correct_answer, incorrect_answers}){
        this.question = question 
        this.answers  = [correct_answer , incorrect_answers]
    }

    get Template(){
        return/*html*/`
        <div class="card" id = "gameCards">
            <div class="card-body">
                <h5 class="card-title">${this.question}</h5>
                <ul class="card-text">
                <li>${this.answers}</li>
                </ul>
                <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="${this.right}">
                 Click Here for the Answer</button>
            </div>
        </div>
        `
    }
}