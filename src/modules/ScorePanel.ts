class ScorePanel{
    score = 0;
    level = 1;
    scoreElem: HTMLElement;
    levelElem: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10,upScore: number = 2){
        this.scoreElem = document.getElementById("score")!;
        this.levelElem = document.getElementById("level")!;

        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    addScore(){
        this.scoreElem.innerHTML = ++this.score+"";
        if (this.score % this.upScore == 0){
            this.upLevel();
        }
    }

    upLevel(){
        if (this.level < this.maxLevel) {
            this.levelElem.innerHTML = ++this.level+"";
        }
    }
}

export default ScorePanel;