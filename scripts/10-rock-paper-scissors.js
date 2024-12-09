function handleCostkeyDown(){
  if (event.key ==='Enter'){
    calculateTotal();
  }
}

    function calculateTotal(){
      const inputElement = document.querySelector('.js-cost-input');
      let cost = Number(inputElement.value) ;
      if (cost < 40){
        cost = cost + 10;
        console.log(cost);
      }
      document.querySelector('.js-total-cost').innerHTML = `£${cost}`;
    }
      const myLocalStorage = localStorage.getItem('score');
   
      let score =  JSON.parse(myLocalStorage);
      // can do logic as !score doers same as below
      if (score === null){
          const score ={
          wins: 0,
          losses: 0,
          ties: 0
        };
        console.log(score);
      } 

      updateScoreElement();

      function playGame(playerMove){
        const computerMove = pickComputerMoves();
        let result =  '';
        //reset()
        if (playerMove ==='rock'){
            if (computerMove === 'rock'){
              result = 'tie';
            } else if (computerMove === 'paper') {
              result = 'lose'; 
            } else if (computerMove === 'scissors') {
              result = 'win';
            }
        } else if (playerMove ==='paper'){
          if (computerMove === 'rock'){
              result = 'win';
            } else if (computerMove === 'paper') {
              result = 'tie'; 
            } else if (computerMove === 'scissors') {
              result = 'lose';
            }
        } else if (playerMove ==='scissors'){
            if (computerMove === 'rock'){
              result = 'lose';
            } else if (computerMove === 'paper') {
              result = 'win'; 
            } else if (computerMove === 'scissors') {
              result = 'tie';
            }
        }  
        switch (result){
          case 'win': {
            score.wins +=1;
            break;
          }
          case 'lose':{
            score.losses +=1;
            break;
          }
          case 'tie': {
            score.ties +=1;
            break;
          }
        }

        localStorage.setItem('score', JSON.stringify(score));
      
        updateScoreElement();

        document.querySelector('.js-moves').innerHTML =` You
        <img src="images/${playerMove}-emoji.png" 
        class="move-icon">;
        <img src="images/${computerMove}-emoji.png"
        class="move-icon">
        Computer`;
      }

      function updateScoreElement() {
        document.querySelector('.js-score')
          .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMoves() {
        const randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = "rock";
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = "paper";
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = "scissors";
        }
        return computerMove;
      }
    