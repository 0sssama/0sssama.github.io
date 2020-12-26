const board = document.querySelector('.board');
const underBoard = document.querySelector('.under-board');
var inputs = [];
var line = document.createElement('div')
line.classList.add('line');
//var lines = 1;
//line.classList.add(0);
for (let i = 1; i <= 81; i++) {
    var input = document.createElement('input');
    //input.name = i;
    //input.id = i;
    input.maxLength = 1;
    input.placeholder = '-';
    inputs.push(input);
    if (i % 9 == 0) {
        inputs.forEach(input => {
            line.appendChild(input);
        })
        board.appendChild(line);
        line = document.createElement('div');
        line.classList.add('line');
        //line.classList.add(lines);
        //lines++;
        inputs = [];
    }
}


function insert(newBoard){
    if (newBoard === 'random') {
        reset()
        var gameArr1 = [
            [2, 0, 3, 0, 0, 8, 6, 0, 7],
            [1, 4, 0, 7, 2, 6, 0, 0, 9],
            [5, 0, 7, 1, 3, 9, 4, 2, 8],
            [0, 2, 5, 0, 8, 1, 9, 0, 4],
            [4, 1, 0, 9, 0, 3, 2, 0, 5],
            [0, 7, 9, 2, 0, 5, 0, 3, 6],
            [6, 0, 2, 0, 1, 0, 0, 9, 3],
            [7, 0, 0, 5, 0, 2, 0, 0, 1],
            [0, 8, 1, 3, 6, 7, 0, 4, 0]
        ];
        var gameArr2 = [
            [2, 3, 0, 4, 1, 5, 0, 6, 8],
            [0, 8, 0, 2, 3, 6, 5, 1, 9],
            [1, 6, 0, 9, 8, 7, 2, 3, 4],
            [3, 1, 7, 0, 9, 4, 0, 2, 5],
            [4, 5, 8, 1, 2, 0, 6, 9, 7],
            [9, 2, 6, 0, 5, 8, 3, 0, 1],
            [0, 0, 0, 5, 0, 0, 1, 0, 2],
            [0, 0, 0, 8, 4, 2, 9, 0, 3],
            [5, 9, 2, 3, 7, 1, 4, 8, 6]
        ];
        if (Math.floor(Math.random() * 2) == 1) {
            insert(gameArr1);
        } else {
            insert(gameArr2);
        }

    } else {
        
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (isNaN(newBoard[i][j]) || newBoard[i][j] === 0) {
                    newBoard[i][j] = '-';
                }
                board.children[i].children[j].style.color = 'inherit';
                board.children[i].children[j].value = newBoard[i][j];
            }
        }
    }
}

const emptyBoard = [
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '']
];
function reset() {
    insert(emptyBoard);
    underBoard.innerHTML = "<a href='#' onClick='reset()'>RESET</a> - <a href='#' onClick='solve()'>SOLVE!</a>";
}

function solve() {
    const b = null;
    var theBoard = [
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b],
        [b, b, b, b, b, b, b, b, b]
    ]
    var importedNum;
    for (let i = 0; i < 9; i++) {
        for (let j = 0;j < 9; j++) {
            importedNum = board.children[i].children[j].value;
            if (isNaN(importedNum) || importedNum === '-' || importedNum === ''){
                board.children[i].children[j].style.color = 'green';
                theBoard[i][j] = 0;
            } else {
                theBoard[i][j] = parseInt(importedNum);
            }
        }
    }
    const isUsedInRow = new Array(9).fill(0).map(_ => new Array());
    const isUsedInCol = new Array(9).fill(0).map(_ => new Array());
    const isUsedInSub = new Array(9).fill(0).map(_ => new Array());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = theBoard[i][j];
            if (num === 0) continue
            const subBoxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3;
            isUsedInRow[i][num] = true;
            isUsedInCol[j][num] = true;
            isUsedInSub[subBoxIndex][num] = true;
        }
    }

    // fill the blanks by backtracking
    const fill = (i, j) => {
        if (i === 9) return true;
        const nextI = j === 8 ? i + 1 : i;
        const nextJ = j < 8 ? j + 1 : 0;
        const subBoxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3;

        if (theBoard[i][j] === 0) {
            for (let num = 1; num <= 9; num++) {
                if (!isUsedInRow[i][num] && !isUsedInCol[j][num] && !isUsedInSub[subBoxIndex][num]) {
                    theBoard[i][j] = num;
                    board.children[i].children[j].value = num;
                    isUsedInRow[i][num] = true;
                    isUsedInCol[j][num] = true;
                    isUsedInSub[subBoxIndex][num] = true;

                    if (fill(nextI, nextJ)) {
                        return true;
                    }
                    // if no number is valid here;
                    theBoard[i][j] = 0;
                    board.children[i].children[j].value = 0;
                    isUsedInRow[i][num] = false;
                    isUsedInCol[j][num] = false;
                    isUsedInSub[subBoxIndex][num] = false;

                }
            }
            return false;
        } else {
            return fill(nextI, nextJ)
        }
    }

    fill(0, 0);
    var found = true;
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (theBoard[i][j] === 0){
                console.log(theBoard[i][j]);
                found = false;
            }
        }
    }
    if (found) {
        underBoard.innerHTML = 'Solved! :) Maybe <a href="#" onClick="reset()">RESET</a> and try again?';
    } else {
        underBoard.innerHTML = "Something went wrong :( Maybe <a href='#'' onClick='reset()'>RESET</a> and try again?";
    }
}
