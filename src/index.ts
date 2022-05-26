// 引入样式
import './style/index.less'

// 引入类
// import Food from './modules/Food';
// import ScorePanel from './modules/ScorePanel';
import GameControl from './modules/GameControl';

console.log("hello ts!")


// const food = new Food();
// console.log(`${food.X}------${food.Y}`);
// food.change();
// console.log(`${food.X}------${food.Y}`);

// const scorePanel = new ScorePanel();
// for (let index = 0; index < 10; index++) {
//     scorePanel.addScore();
// }

const gameControl = new GameControl();

// 定时任务
// setInterval(()=>{
//     console.log(gameControl.direct)
// },1000);