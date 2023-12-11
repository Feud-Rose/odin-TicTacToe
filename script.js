

(function createGameboard () {
    const gameBoard = {0:'e', 1:'e', 2:'e', 3:'e', 4:'e', 5:'e', 6:'e', 7:'e', 8:'e', "turn":8}
    console.log(gameBoard)

    const player1 = {
        name: "Alf",
        marker: "X",
        wins: 0
    }
    const player2 = {
        name: "Bob",
        marker: "O",
        wins: 0
    }

    const markSquare = (mark, num) => {
        gameBoard[num] = mark
        gameBoard.turn += 1
        console.log(gameBoard) 
        let gameStatus = gameCheck()
        console.log(gameStatus)
    }
    
    console.log(markSquare(player2.marker,0)) 
    console.log(markSquare(player2.marker,5))
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

        function checkWinner(player, m) {
            if (m+m+m == line1 || m+m+m == line2 || m+m+m == line3 || m+m+m == line4 || m+m+m == line5 || m+m+m == line6 || m+m+m == line7 || m+m+m == line8) {
                gameBoard.turn = 0
                player.wins += 1
                console.log(player)
            }
            else if (gameBoard.turn >= "9") {
                console.log("draw")
            }

        }
        let checkP1 = checkWinner(player1,"X")
        let checkP2 = checkWinner(player2,"O")
  
    }
   






})()
