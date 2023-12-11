

function createGame () {
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
    const gameData = {0:'e', 1:'e', 2:'e', 3:'e', 4:'e', 5:'e', 6:'e', 7:'e', 8:'e', "turn":0, "current": 1}
  /* add coin flip and refer to it here*/
    

    console.log(gameData)
    const markSquare = (mark, num) => {
        gameData[num] = mark
        gameData.turn += 1
        console.log(gameData) 
        let gameStatus = gameCheck()
        console.log(gameStatus)
    }

    function reset() {
        for(let i = 0; i < 9; i++){
        gameData[i] = "e"
        }
    } 

    console.log(markSquare(player2.marker,0)) 
    console.log(markSquare(player2.marker,5))
    console.log(markSquare(player2.marker,2))   
    
    function gameCheck() {
        let line1 = gameData[0] + gameData[1] + gameData[2]
        let line2 = gameData[0] + gameData[4] + gameData[8]
        let line3 = gameData[0] + gameData[3] + gameData[6]
        let line4 = gameData[3] + gameData[4] + gameData[5]
        let line5 = gameData[6] + gameData[4] + gameData[2]
        let line6 = gameData[6] + gameData[7] + gameData[8]
        let line7 = gameData[1] + gameData[4] + gameData[7]
        let line8 = gameData[2] + gameData[5] + gameData[8]
        console.log(line1)

        function checkWinner(player, m) {
            if (m+m+m == line1 || m+m+m == line2 || m+m+m == line3 || m+m+m == line4 || m+m+m == line5 || m+m+m == line6 || m+m+m == line7 || m+m+m == line8) {
                gameData.turn = 0
                player.wins += 1
                let goNext = reset()
                console.log(player)
            }
            else if (gameData.turn >= "9") {
                console.log("draw")
                let goNext = reset()
                gameData.turn = 0
            }

        }
        let checkP1 = checkWinner(player1,"X")
        let checkP2 = checkWinner(player2,"O")
  
    }

    const gameBoard = document.querySelector(".gameBoard");
    console.log(gameBoard)
    console.log(gameBoard)
    gameBoard.addEventListener ("click", (e) => {
          console.log(e)
          let tarPanel = e.target.classList
          console.log(tarPanel)
          let newNum = tarPanel[0].slice(-1)
          console.log(newNum)
          /* ADD PROPER VARIABLES */
            if(gameData.current === 1) {
                let move = markSquare(player1.marker,newNum);
                gameData.current = 2
            }
            else if(gameData.current === 2) {
                let move = markSquare(player2.marker,newNum);
                gameData.current = 1
            }
            
        });
    
   



    /* Do I even need */
    return {
     markSquare
    }
  
  


}

  console.log(createGame())