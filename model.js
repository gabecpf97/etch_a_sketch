/**
 * create button and its div for holding it 
 */
const butts_container = document.createElement('div');
butts_container.classList.add('butt_container');
const reset = document.createElement('button');
reset.textContent = "Reset and change amount of squares";
reset.classList.add('butt');
butts_container.appendChild(reset);
document.querySelector('body').appendChild(butts_container);

// create default square grid 16 x 16
createSquareDiv(16);

/**
 * add click listener to the reset button that reset the grid
 * and ask the user for the amount of square they want for
 * each side
 */
reset.addEventListener('click', (e) => {
    let amount = prompt('Enter square per side (max: 100)', 16);
    resetAmount(amount);
});

/**
 * Function that reset the grid and ask user for the amount of
 * square per side in the new grid
 * @param {*} amount amount of square per side
 */
function resetAmount(amount){
    amount = checkLimit(amount);
    let holder = document.querySelector('.holder');
    document.querySelector('body').removeChild(holder);
    createSquareDiv(amount);
}

/**
 * Helper function that check if the amount of square user type
 * are within limit, if not prompt again
 * @param {*} amount amount of square per side
 * @returns amount of square per side
 */
function checkLimit(amount) {
    if (amount > 100 || amount < 1) {
        return checkLimit(prompt('Please enter amount less than 100 and bigger than 0', 16));
    } else {
        return amount;
    }
}

/**
 * Function that create div that contian the desire amount of
 * square per side, also add class to each square to let it change
 * color when hovered above
 * @param {*} n square per side
 */
function createSquareDiv(n) {
    let container = createConatiner(n);
    createSquare(container, n);
    addListener();
}

/**
 * Helper function that create container div and the holder div
 * then adding it the html file
 * @param {*} n the amount of square per side
 * @returns the container for squares
 */
function createConatiner(n) {
    const holder = document.createElement('div');
    const container = document.createElement('div');
    holder.classList.add('holder');
    container.classList.add('container');
    container.style.cssText += `grid-template-columns: repeat(${n}, 1fr)`;
    holder.appendChild(container);
    document.querySelector('body').appendChild(holder);
    return container;
}

/**
 * Helper function that create square then append it the the 
 * contianer
 * @param {*} container container for squares
 * @param {*} n the amount of square per side
 */
function createSquare(container, n) {
    for (let i = 0; i < (n * n); i++) {
        let grid_square = document.createElement('div');
        grid_square.classList.add('square');
        container.appendChild(grid_square);
    };
}

/**
 * Helper function that add hover listener for each squares
 */
function addListener() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', (e) => {
            square.classList.add('filled');
        });
    });
}