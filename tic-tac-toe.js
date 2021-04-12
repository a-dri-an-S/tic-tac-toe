class TicTacToe {
    constructor() {
        this.board = new Array(3).fill("").map(row => new Array(3).fill(""));
        this.currentPlayer = "X";
    };

    changePlayer = () => {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X"
    }

    validateMoveIsOnGameBoard = (row, col) => {
        if(row >= 0 && row <= 3 && col >= 0 && col <= 3) return;
        throw new Error("Please select a valid place on the board");
    }

    validateSpaceIsAvailable = (row, col) => {
        if (!!this.board[row][col]) {
            throw new Error("this space is already taken")
        }
    }

    calculateWin = () => {
        // calculate horizontal
        for(let i = 0; i < this.board.length; i++){
            if (this.board[i].join("") === 'XXX'){
                console.log(`${this.currentPlayer} is the winner!`)
                this.board = new Array(3).fill("").map(row => new Array(3).fill(""));
            } else if(this.board[i].join("") === 'OOO'){
                console.log(`${this.currentPlayer} is the winner!`)
                this.board = new Array(3).fill("").map(row => new Array(3).fill(""));
            }
        }


        // calculate vertical
        // calculate diagonal
    }

    gameBoardIsFull = () => {
        if(!this.board[0].includes("") && !this.board[1].includes("") && !this.board[2].includes("")){
            // throw new Error("The game board is full and there are no winners")
            console.log("This game board is full and there are NO WINNERS!")
            this.board = new Array(3).fill("").map(row => new Array(3).fill(""));
        }
    }

    move(row, col){
        // validate the move
        this.validateMoveIsOnGameBoard(row, col);

        // validate space is available
        this.validateSpaceIsAvailable(row, col);

        // mutate the gameBoard
        this.board[row][col] = this.currentPlayer;

        // calculate the win
        this.calculateWin();

        // validate game board is full
        this.gameBoardIsFull();

        // change player
        this.changePlayer();

    }

};

const salVersusAdrian = new TicTacToe();


// salVersusAdrian.move(0,0);
// salVersusAdrian.move(0,1);
// salVersusAdrian.move(0,2);
// salVersusAdrian.move(1,0);
// salVersusAdrian.move(1,1);
// salVersusAdrian.move(1,2);
// salVersusAdrian.move(2,0);
// salVersusAdrian.move(2,1);
// salVersusAdrian.move(2,2);

salVersusAdrian.move(0,0);
salVersusAdrian.move(1,0);
salVersusAdrian.move(0,1);
salVersusAdrian.move(1,1);
salVersusAdrian.move(2,2);
salVersusAdrian.move(1,2);


console.log(salVersusAdrian.board);













