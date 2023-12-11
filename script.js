

(function createGameboard () {
    const gameBoard = {0:'e', 1:'e', 2:'e', 3:'e', 4:'e', 5:'e', 6:'e', 7:'e', 8:'e'}
    const player1 = {
        name: "Alf",
        marker: "X"
    }
    const player2 = {
        name: "Bob",
        marker: "O"
    }

    const markSquare = (mark, num) => {
        gameBoard[num] = mark
        console.log(gameBoard)
    }
    console.log(markSquare(player2.marker,0)) 
    console.log(markSquare(player2.marker,1))
    console.log(markSquare(player2.marker,2))   
    
    function gameCheck() {
        let line1 = gameBoard[0] + gameBoard[1] + gameBoard[2]
        let line2 = gameBoard[0] + gameBoard[4] + gameBoard[8]
        let line3 = gameBoard[0] + gameBoard[3] + gameBoard[6]
        let line4 = gameBoard[3] + gameBoard[4] + gameBoard[5]
        let line5 = gameBoard[6] + gameBoard[4] + gameBoard[2]
        let line6 = gameBoard[6] + gameBoard[7] + gameBoard[8]
        let line7 = gameBoard[1] + gameBoard[4] + gameBoard[7]
        let line8 = gameBoard[2] + gameBoard[5] + gameBoard[8]
        console.log(line1)
        function checkWinnerX() {
            if ("XXX" == line1 || "XXX" == line2 || "XXX" == line3 || "XXX" == line4 || "XXX" == line5 || "XXX" == line6 || "XXX" == line7 || "XXX" == line8) {
            return "X wins"
            }
        }
        
        function checkWinnerO() {
            if ("OOO" == line1 || "OOO" == line2 || "OOO" == line3 || "OOO" == line4 || "OOO" == line5 || "OOO" == line6 || "OOO" == line7 || "OOO" == line8) {
            return "O wins"
            }
        }
        let burger = checkWinnerX()
        let hotdog = checkWinnerO()
        console.log(burger)
        console.log(hotdog)
    }
    let taco = gameCheck()

})()
