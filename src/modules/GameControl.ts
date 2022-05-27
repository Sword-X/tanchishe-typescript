import Food from  './Food';
import Snake from  './Snake';
import ScorePanel from  './ScorePanel';

class GameControl{

    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direct: string = '';

    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();
        this.init();
        
    }

    init(){
        // 键盘事件：第一个this为document，第二个才是当前对象
        document.addEventListener('keydown',this.keydownHandler.bind(this));
        this.run();
    }

    keydownHandler(event: KeyboardEvent){
        console.log(this);
        this.direct = event.key;
    }

    run(): void{
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direct) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }
        this.checkEat(X,Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e) {
            alert((e as any).message);
            this.isLive = false;
        }
        
        // 下面不会执行？
        this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level -1) * 30);
        // setTimeout(() => {
        //     this.run.bind(this);
        // }, 300);
    
    }

    checkEat(X: number,Y: number){
        if(X == this.food.X && Y == this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }   

}

export default GameControl;