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
        // if (this.direct.indexOf('Up') != -1) {
        //     this.snake.Y = --this.snake.Y;
        // }else if(this.direct.indexOf('Down') != -1){
        //     this.snake.Y = ++this.snake.Y;
        // }else if(this.direct.indexOf('Left') != -1){
        //     this.snake.X = --this.snake.X;
        // }else if(this.direct.indexOf('Right') != -1){
        //     this.snake.X = ++this.snake.X;
        // }
        switch (this.direct) {
            case 'ArrowUp':
            case 'Up':
                this.snake.Y = this.snake.Y-10;
                break;
            case 'ArrowDown':
            case 'Down':
                this.snake.Y = this.snake.Y+10;
                break;
            case 'ArrowLeft':
            case 'Left':
                this.snake.X = this.snake.X-10;
                break;
            case 'ArrowRight':
            case 'Right':
                this.snake.X = this.snake.X+10;
                break;
        }
        // 下面不会执行？
        this.isLive && setTimeout(this.run.bind(this), 300-(this.scorePanel.level -1) * 30);
        // setTimeout(() => {
        //     this.run.bind(this);
        // }, 300);

    
    }

}

export default GameControl;