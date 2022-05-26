class Snake{
    head: HTMLElement;
    bodys: HTMLCollection;
    snake: HTMLElement;

    constructor(){
        this.snake = document.getElementById("snake")!;
        this.head = document.querySelector('#snake > div') as HTMLElement;
        this.bodys = this.snake.getElementsByTagName("div");
    }

    get X (){
        return this.head.offsetLeft;
    }

    set X (value: number){
        this.head.style.left = value +'px';
    }

    get Y (){
        return this.head.offsetTop;
    }

    set Y (value: number){
        this.head.style.top = value +'px';
    }

    addBody(){
        this.snake.insertAdjacentHTML("beforeend","<div></div>");
    }

}

export default Snake;