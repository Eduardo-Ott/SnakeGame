import { onSnake, expandSnake } from './snake.js'
import {randomGridPosition} from './grid.js'

let star = getRandomStarPosition();
const EXPANSION_RATE = 1;

export function update() {

    if(onSnake(star)) {
        expandSnake(EXPANSION_RATE)
        star = getRandomStarPosition()
    }

}

export function draw(gameBoard) {
    const starElement = document.createElement('div');
    starElement.style.gridRowStart = star.y;
    starElement.style.gridColumnStart = star.x;
    starElement.classList.add('star');
    gameBoard.appendChild(starElement);

}

function getRandomStarPosition(){
    let newStarPosition;
    
    while (newStarPosition == null || onSnake(newStarPosition)) {
        newStarPosition = randomGridPosition();
    }
    return newStarPosition
}