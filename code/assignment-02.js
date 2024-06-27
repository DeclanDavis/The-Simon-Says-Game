   // Assigning HTML elements to variables
   const topLeft = document.getElementById("circle1");   
   const topRight = document.getElementById("circle2");                      
   const bottomLeft = document.getElementById("circle3");   
   const bottomRight = document.getElementById("circle4");
   const startButton = document.getElementById("startButton"); 
   const gameStatus = document.getElementById("gameStatus");
   const currentScore = document.getElementById("currentCount");
   const highScore = document.getElementById("highestCount");

   let seq = [];              // Empty array keep track of the flashing lights                                  
   let playerSeq = [];        // Array to keep track of the players clicks 
   let flash;                   // Number of flashes appeared in the game
   let turn;                    // Keep track of what turn we're on
   let good;                    // Boolean: if the player has hit all the right colours
   let compTurn;                // Boolean: whos turn is it: computers or players?
   let intervalId;              // Interval ID for game loop
   let win;                     // Boolean: if the player has won the game or not
   let signalTimer;             // To store the timestamp of the last flash


   startButton.addEventListener('click', function onClick(event) {               // Event listener for the start button to turn on game  
      gameStatus.style.backgroundColor = "Green";                                // Make gameStatus light GREEN
      document.getElementById("startButton").style.pointerEvents = "none";       // Cannot click button when game is on
      setTimeout(startGame, 2000);                                               // Stall start game for 3 secs (3000 ms == 3 secs)
      clickDisable();                                                            // 2000 ms + 1000 ms from setInterval(gameTurn, 1000)
   }) 
   
    // Add event listeners so the player can click colours 
   topLeft.addEventListener('click', (event) => {  
         playerSeq.push(1);                               // Add 1 to the playerOrder array to represent the clicked colour  
         one();                                             // Flash ones colour, top left (green)
         playerTurn()                                       // Call the playerTurn function                    
   })
   topRight.addEventListener('click', (event) => {  
         playerSeq.push(2);                               // Add 2 to the playerOrder array to represent the clicked colour 
         two();                                             // Flash twos colour, top right (red)
         playerTurn();                                      // Call the playerTurn function                      
   })
   bottomLeft.addEventListener('click', (event) => {  
         playerSeq.push(3);                               // Add 3 to the playerOrder array to represent the clicked colour                                        
         three();                                           // Flash threes colour, bottom left (yellow)                 
         playerTurn();                                      // Call the playerTurn function
   })
   bottomRight.addEventListener('click', (event) => {  
         playerSeq.push(4);                               // Add 4 to the playerOrder array to represent clicked colour
         four();                                            // Flash four's colour, bottom right (blue)               
         playerTurn();                                      // Call the playerTurn function
   })

   
   function startGame(){                            // Function called when start button is clicked
    win = false;                                    // Reset variables everytime we play
    seq = [];                                     // Will store computer's sequence array
    playerSeq = [];                               // Will store player's sequence array
    flash = 0;                                      // How many times the game has flashed
    intervalId = 0;                                 
    turn = 1;

    // Display the number of correctly repeated signals
      if(turn - 1 < 10){
      currentCount.innerHTML = "0" + (turn - 1);              // number of correctly repeated signals is the turn - 1
      }                                                       // as turn begins at 1
      else {                                                  // concatenate with "0" if the number is below 10 so we always
      currentCount.innerHTML = turn - 1;                      // see two digits i.e. 00, 01, 02, 03, ... 09
      }    
      good = true;                                             // The player hasn't hit anything incorrect yet

                                                            
    for(let i = 0; i < 100; i++){                            // Randomly fill up the order array to show what will light
        let rand = (Math.floor(Math.random() * 4) +1);      // up in the game
        seq.push(rand);                                   // Math.floor and Math.random to get whole number
    }                                                       // Between 1 & 4 inclusively 
    console.log(seq);                                     // Put in order array
    
    compTurn = true;                                        // It is the computer's turn
    intervalId = setInterval(gameTurn, 1000);               // Uses 'setInterval' to run function 'gameTurn' every 1000 m/s
   }                                                        // gameTurn starts the game

   function gameTurn(){  
      clickDisable();                                       // Player cannot click when the computer's turn                   
      if(flash == turn){                                    // If the number of flashes == the turn we're on. Computer's turn is over.
        clearInterval(intervalId);                          // If true, clear the interval to stop further flashes
        compTurn = false;                                   // Computer's turn is over
        playerTimer();                                      // Timer starts when it's the players turn                                            
        playerTurn();

      } else {                                              // Otherwise it is still the computer's turn and it will flash another.                                      
         setTimeout(() => {                                 // Wait before flashing the next colour
            if(seq[flash] == 1) one();
            if(seq[flash] == 2) two();
            if(seq[flash] == 3) three();
            if(seq[flash] == 4) four();
            flash++;
         }, 400);                                           //Will wait 400ms then do what is in setTimeout(() => {.... })
      }
   }

   function playerTurn() {
      clickEnable();                                        // Player can now click buttons
      resetTimer();                                         // Reset the timer to 0 for the player's turn

      if(playerSeq[playerSeq.length - 1 ] !== seq[playerSeq.length - 1]) { //If the most recent number pushed onto player's array when button is clicked
         lostGame();                                                               // is not equal to the number in the same index of the computer's array
      }                                                                            // the player's order does not match and hence they lose
                                                                                 
      if(playerSeq.length == 100 && good == true) {                  // If the player's array length is equal to the computer's array length
         winGame();                                                   // that means they have completed the game and hence win
      }                            
      if(turn == playerSeq.length && !win ){                       // if the player gets correct but has not won the game
         stopTimer();                                                // They correctly clicked, and we stop the timer
         turn++;                                                     // turn increments
         playerSeq = [];                                           // Empty the players array so can compare to player's next turn
         compTurn = true;                                            // now the computer's turn, we mark the boolean value
         flash = 0;                                                  // reset the flash to 0 so computer can start flash sequence from the start 
         
         if(turn - 1 < 10){                                         // concatenate with "0" if the number is below 10 so we always
            currentCount.innerHTML = "0" + (turn - 1);              // see two digits i.e. 00, 01, 02, 03, ... 09
            }
         else {
            currentCount.innerHTML = turn - 1;                      // correct guesses by (turn - 1)
            } 

         if(turn > 5 && turn < 10){                                  // If the turn is over 5, shorten the gameTurn intervals
            intervalId = setInterval(gameTurn, 800);                 // Speeds up the flash intervals
         }
         else if(turn > 9 && turn < 14){                             // Again when turn is over 9
            intervalId = setInterval(gameTurn, 600);
         }
         else if(turn > 13){
            intervalId = setInterval(gameTurn, 450);                 // Again when turn is over 13
         } else {
         intervalId = setInterval(gameTurn, 1000);                   // Otherwise keep flashing at 1000/ms
         }
      }
}

   function winGame(){
      if(currentCount.innerHTML > highestCount.innerHTML){        // If their current Score is higher than the record
         highestCount.innerHTML = currentCount.innerHTML;         // Update the record with the new highest score
      }
      flash5times();                                              // Flash 5 times when you win
      currentCount.innerHTML = "0" + 0;                           // Reset current count
      win = true;                                                 // Set win to true
      gameStatus.style.backgroundColor = "Red";                   // Turn off gameStatus light
      document.getElementById("startButton").style.pointerEvents = "auto";    //Enable the button again
      stopTimer();
   }

   function lostGame(){
      clickDisable();                                           //if player gets something wrong
         if(currentCount.innerHTML > highestCount.innerHTML){        //If their current Score is higher than the record
            highestCount.innerHTML = currentCount.innerHTML;         //update the record with the new highest score
         }
         flash5times();      
         currentCount.innerHTML = "0" + 0;                        // Reset the current score to 00
         gameStatus.style.backgroundColor = "Red";                // Change gameStatus light to RED
         turn = 0;                                                // Reset turn to 0
         document.getElementById("startButton").style.pointerEvents = "auto";    //Enable the button again
         stopTimer();                                             //Stop the player timer
   }

   function flash5times(){
      let count = 0;                                              // count number of flashes
      const flashInterval = setInterval(() => {                   // Set up an interval to repeatedly flash all colors
      if(count >= 5){                                             // if flash has happened 5 times
         clearInterval(flashInterval);                            // clear the interval to stop flashing
         clearColor();                                            // Reset colours to initial colours
      } else {
         flashColor();                                            // Flash all the colours
         setTimeout(() => clearColor(), 150);                     // After 150 ms, reset the colours to initial
         count++                                                  // Increment count
      }
   }, 300);                                                       // Set interval to flash every 300 ms   
 }

   function playerTimer(){                                        // Function to time how long a player takes so if they go over
      signalTimer = setTimeout(lostGame, 5000);                   // Calls lostGame if nothing is clicked in 5 seconds
   }
   function stopTimer(){                                          // Function to stop the player's timer when it's the games turn
      clearTimeout(signalTimer);
   }
   function resetTimer(){                                         // Function to reset player's timer
      stopTimer();                                                // Used everytime a signal is clicked
      playerTimer();
   }

 function clickDisable() {                                                    // Function to turn off click events on all buttons
   document.getElementById("startButton").style.pointerEvents = "none";       // When set to "none" it means you cannot click the buttons
   document.getElementById("circle1").style.pointerEvents = "none";
   document.getElementById("circle2").style.pointerEvents = "none";
   document.getElementById("circle3").style.pointerEvents = "none";
   document.getElementById("circle4").style.pointerEvents = "none";
 }

 function  clickEnable() {                                                    // Function to turn on click events on all buttons      
   document.getElementById("circle1").style.pointerEvents = "auto";           // When set to "auto" restores default behaviour
   document.getElementById("circle2").style.pointerEvents = "auto";
   document.getElementById("circle3").style.pointerEvents = "auto";
   document.getElementById("circle4").style.pointerEvents = "auto";
 }


 function one() {                                                            // Flash one, (top left, green)
   topLeft.style.backgroundColor = "lightgreen";                             // Changes colour, then resets to initial colour after 200ms, 
   setTimeout(clearColor, 200);                                              // giving a "flash"
}                                                                          
function two() {                                                             // Flash two, (top right, red)  
   topRight.style.backgroundColor = "tomato";
   setTimeout(clearColor, 200);
}
function three() {                                                           // Flash three, (bottom left, yellow) 
   bottomLeft.style.backgroundColor = "yellow";
   setTimeout(clearColor, 200);
}
function four() {                                                            // Flash four, (bottom right, blue)
   bottomRight.style.backgroundColor = "lightskyblue";
   setTimeout(clearColor, 200);
}
function clearColor() {                                                       // Reset all the colours to initial colour
   topLeft.style.backgroundColor = "darkgreen";
   topRight.style.backgroundColor = "darkred";
   bottomLeft.style.backgroundColor = "goldenrod";
   bottomRight.style.backgroundColor = "darkblue";
}

function flashColor() {                                                       // Changes all colours to flash colour
   topLeft.style.backgroundColor = "lightgreen";
   topRight.style.backgroundColor = "tomato";
   bottomLeft.style.backgroundColor = "yellow";
   bottomRight.style.backgroundColor = "lightskyblue";
}

