

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
    const gameData = {0:'e', 1:'e', 2:'e', 3:'e', 4:'e', 5:'e', 6:'e', 7:'e', 8:'e', "turn":0, "current": 0}
    const start = document.querySelector(".start");
    const gameBoard = document.querySelector(".gameBoard");
  /*coin flip too start*/
  function coinFlip(){
    if (gameData.current === 0) {
        if (Math.random() < 0.5) {
            gameData.current = 1
        }
        else {
            gameData.current = 2
        }
    }
    }
    


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
        for(let i = 0; i < 9; i++){
            let var1 = document.querySelector('.xMarked')
            if (var1) {
                var1.classList.remove('xMarked')
            console.log(var1)}
        }
        for(let i = 0; i < 9; i++){
            let var2 = document.querySelector('.oMarked')
            if (var2) {
            var2.classList.remove('oMarked')}
            console.log(var2)
        }
    } 
 
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

    console.log(gameBoard)
    gameBoard.addEventListener ("click", (e) => {
          console.log(e)
          console.log(gameData)
          let tarPanel = e.target.classList
          console.log(tarPanel)
          let newNum = tarPanel[0].slice(-1)
          console.log(newNum)
          
            if(gameData.current === 1) {
                let move = markSquare(player1.marker,newNum);
                let newClass = e.target
                newClass.classList.add('xMarked') 
                gameData.current = 2
            }
            else if(gameData.current === 2) {
                let move = markSquare(player2.marker,newNum);
                let newClass = e.target
                newClass.classList.add('oMarked') 
                gameData.current = 1
            }
            
        });
        
    
    console.log(start)
    start.addEventListener ("click", (e) => {
          console.log(e)
          let clear = reset()
          let flip = coinFlip()
          console.log(gameData)
        });
   



    /* Do I even need */
    return {
     markSquare
    }
  
  


}

  console.log(createGame())