/**
 * create a div for containing all squares.
 */
const container = document.createElement('div');
container.classList.add('container');
container.setAttribute('style', 'display:grid;\
                        grid-template-columns: repeat(16, 1fr);\
                        width:600px; height:600px; border: 10px solid #555');
document.querySelector('body').appendChild(container);

/**
 * create 16 * 16 squeare that are inside the conatiner div
 */
for (let i = 0; i < (16 * 16); i++) {
    let grid_square = document.createElement('div');
    grid_square.classList.add('square');
    grid_square.setAttribute('style', 
                'background-color:white; border: 1px solid black');
    container.appendChild(grid_square);
};