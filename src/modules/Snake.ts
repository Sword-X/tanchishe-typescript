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
        if(value == this.X){
            return;
        }
        if(this.bodys.length > 1){
            console.log("调头了")
            if(value == (this.bodys[1] as HTMLElement).offsetLeft){
                console.log("value:"+value)
                if(value < this.X){
                    value+=20;
                }else{
                    value-=20;
                }
            }
        }
        for (let index = 1; index < this.bodys.length-1; index++) {
            let element = this.bodys[index] as HTMLElement;
            if(value == element.offsetLeft && this.Y == element.offsetTop){
                throw new Error("游戏结束！");
            }
        }
        if(value < 0 || value > 290){
            throw new Error("游戏结束！");
        }
        this.moveBodys();
        this.head.style.left = value +'px';
    }

    get Y (){
        return this.head.offsetTop;
    }

    set Y (value: number){
        if(value == this.Y){
            return;
        }
        if(this.bodys.length > 1){
            console.log("调头了");
            if(value == (this.bodys[1] as HTMLElement).offsetTop){
                if(value < this.Y){
                    value+=20;
                }else{
                    value-=20;
                }
            }
        }
        
        for (let index = 1; index < this.bodys.length-1; index++) {
            let element = this.bodys[index] as HTMLElement;
            if(this.X == element.offsetLeft && value == element.offsetTop){
                throw new Error("游戏结束！");
            }
        }
        if(value < 0 || value > 290){
            throw new Error("游戏结束！");
        }
        this.moveBodys();
        this.head.style.top = value +'px';
    }

    addBody(){
        this.snake.insertAdjacentHTML("beforeend","<div></div>");
    }

    moveBodys(){
        console.log("长度："+this.bodys.length);
        // bodys包含蛇头
        // console.log((this.bodys[0] as HTMLElement).offsetLeft+"--0--"+(this.bodys[0] as HTMLElement).offsetTop);
        // console.log(this.head.offsetLeft+"--head--"+this.head.offsetTop);
       for (let index = this.bodys.length -1; index > 0; index--) {
           let body  = this.bodys[index] as HTMLElement;
        //    console.log(111+"--"+index+"--"+body.offsetTop+"---"+body.offsetLeft)
           let before  = this.bodys[index -1] as HTMLElement;
           body.style.top = before.offsetTop+"px";
           body.style.left = before.offsetLeft+"px";
       }
    }
}

export default Snake;