class TicTacToe {
    constructor() {
        this.board = new Array(3).fill("").map(row => new Array(3).fill(""));
        this.currentPlayer = "X";
    };

    changePlayer = () => {
        this.currentPlayer = this.currentPlayer === "X" ? "0" : "X"
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
        if (this.board[0][0].includes('X') && this.board[0][1].includes('X') && this.board[0][2].includes('X')){
            console.log(`${this.currentPlayer} is the winner!`)
            this.board = new Array(3).fill("").map(row => new Array(3).fill(""));
            console.log(this.board)
        }; 

        // calculate vertical
        // calculate diagonal
    }

    gameBoardIsFull = () => {
        if(!this.board[0].includes("") && !this.board[1].includes("") && !this.board[2].includes("")){
            throw new Error("The game board is full and there are no winners")
        }
    }

    move(row, col){
        // validate the move
        this.validateMoveIsOnGameBoard(row, col);

        // validate space is available
        this.validateSpaceIsAvailable(row, col);

        // mutate the gameBoard
        this.board[row][col] = this.currentPlayer;

        // validate game board is full
        this.gameBoardIsFull();

        // calculate the win
        this.calculateWin();

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
salVersusAdrian.move(0,2);



console.log(salVersusAdrian.board);













