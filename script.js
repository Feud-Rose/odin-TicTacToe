

function createGame () {
    const player1 = {
        name: "Player 1",
        marker: "X",
        wins: 0
    }
    const player2 = {
        name: "Player 2",
        marker: "O",
        wins: 0
    }

    const gameData = {0:'e', 1:'e', 2:'e', 3:'e', 4:'e', 5:'e', 6:'e', 7:'e', 8:'e', "turn":0, "current": 0, "active": 0}
    const start = document.querySelector(".start");
    const gameBoard = document.querySelector(".gameBoard");
    const outputField = document.querySelector(".log")
    const p1ScoreBoard = document.querySelector(".p1Score")
    const p2ScoreBoard = document.querySelector(".p2Score")
    const editPlayer1 = document.querySelector(".edit1")
    const editPlayer2 = document.querySelector(".edit2")
    

    function activeTurnOutput() {
        if(gameData.active == 1) {
            if(gameData.current == 1)
            textOutput("Your turn " + player1.name +"!")
            else {
            textOutput("Your turn " + player2.name +"!")
            }
        }
    }






    function updateScore () {
        console.log(player1)
        console.log(player2)
    p1ScoreBoard.textContent = "Wins: " + player1.wins
    p2ScoreBoard.textContent = "Wins: " + player2.wins
    start.textContent = "New Game"
    }

    function textOutput (str) {
        console.log(str)
        outputField.textContent = str
    }


  /*coin flip too start*/
    function coinFlip(){
        if (gameData.current === 0) {
            if (Math.random() < 0.5) {
                gameData.current = 1
                let playerTurn = activeTurnOutput()
            }
            else {
                gameData.current = 2
                let playerTurn = activeTurnOutput()
            }
        }
    }

    const markSquare = (mark, num) => {
        gameData[num] = mark
        gameData.turn += 1
        let playerTurn = activeTurnOutput()
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
        if(gameData.active == 1) {
            player1.wins = 0   
            player2.wins = 0  
        }
        
        let score = updateScore()
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
                let score = updateScore()
                gameData.active = 2
                outputField.textContent = player.name + " Wins!"
                console.log(player)
            }
            else if (gameData.turn >= "8") {
                console.log("draw")
                let drawOutput = textOutput("It's a Draw")
                gameData.active = 2
                gameData.turn = 0
            }

        }
        let checkP1 = checkWinner(player1,"X")
        let checkP2 = checkWinner(player2,"O")
  
    }



    function isMoveLegal(event, num) {
      let classCheck = event[0].slice(0,-1)
        console.log(classCheck)
        let emptyCheck = gameData[num]
        let active = gameData.active
        if (classCheck == "panel" && emptyCheck =="e" && active == 1){
                return true
                }
             return false
        }
    



    console.log(gameBoard)

    gameBoard.addEventListener ("click", (e) => {
          console.log(e)
          console.log(gameData)
          let tarPanel = e.target.classList
          console.log(tarPanel)
          let newNum = tarPanel[0].slice(-1)
          console.log(newNum)
          let legal = isMoveLegal(tarPanel,newNum)
            console.log(legal)
         
          if(legal) {
         

            if(gameData.current == 1) {
                let move = markSquare(player1.marker,newNum);
                let newClass = e.target
                newClass.classList.add('xMarked') 
                gameData.current = 2
                
            }
            else if(gameData.current == 2) {
                let move = markSquare(player2.marker,newNum);
                let newClass = e.target
                newClass.classList.add('oMarked') 
                gameData.current = 1
                
            }
            }

            else {
                let active = gameData.active
                if (active == 0) {
                    outputField.textContent ="Press \"Start\""
                    return false
                }
                let tryAgain= textOutput("Pick an Empty spot")
            }
            
   
        });
        
    
    console.log(start)
    start.addEventListener ("click", (e) => {
        console.log(e)
        let x = gameData.active
        console.log(x)
        if (x == 1) {  
            let clear = reset()
            gameData.active = "0"
            gameData.current = 0
            start.textContent = "Start"
            console.log('true')
            
        }
        else if (x == 2){
            let clear = reset()
            gameData.active = 1
            gameData.current = 0
            let flip = coinFlip()
            start.textContent = "Reset"
            console.log(gameData)
        }



        else if(x == 0) {
            gameData.active = 1
            gameData.current = 0
            let flip = coinFlip()
            start.textContent = "Reset"
            console.log("false")
           
        }
        });
 
        /* change these too input fields later */
  
    function editPlayer(num) {
        let newName = prompt("Please enter your name:", "Player " + num)
        return newName
        }

    editPlayer1.addEventListener ("click", (e) => {
        let newName = editPlayer(1)
        player1.name = newName
        let updateName = document.querySelector(".playerName1")
        console.log(updateName)
        updateName.textContent = player1.name
                
        })
    editPlayer2.addEventListener ("click", (e) => {
        let newName = editPlayer(2)
        player2.name = newName
        let updateName = document.querySelector(".playerName2")
        console.log(updateName)
        updateName.textContent = player2.name
        })

}

  console.log(createGame())