//Game States
// "WIN"  - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE"  - Player robot's health is 0 or less

//player variables - global variables - can be used in any function
var playerName = window.prompt("What is your Robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//Alert users that they are starting the round
// window.alert("Welcome to Robot Gladiators!");
 
var fight = function(enemyName) {
// fight function statements
 //repeat and execute as long as the enemy robot is alive
while(enemyHealth > 0 && playerHealth > 0) {
    var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//If player chooses to fight, then FIGHT!
if (promtFight === "skip" || promtFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight! Goodbye!");
        //subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney)
        break;
    } 
} 
    // remove enemy's health by subtracting the amount set in the player attack variable 
   enemyHealth = enemyHealth - playerAttack;
   // Log a resulting message to the console so we know that it worked.
   console.log(
   playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
   );
   
   //check enemy's health
   if (enemyHealth <= 0) {
   window.alert(enemyName + " has died!");
   //award player money for winning
   playerMoney = playerMoney + 20;
   //leave while loop since enemy is dead
//    break;
   } else {
   window.alert(enemyName + " still has " + enemyHealth + " health left");
   }
   // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
   playerHealth = playerHealth - enemyAttack;    
   // Log a resulting message into the console so we that that it worked. 
   console.log(
   enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
   );
   
   //check players health
   if(playerHealth <= 0) {
    window.alert(playerName + " has died!");
   //leave while loop since player is dead
   } else {
   window.alert(playerName + " still has " + playerHealth + " health left");
        } 
     }
 }
 
 //FIGHT FOR LOOP
 var startGame = function() {
   //restart player stats
   playerHealth = 100;
   playerAttack = 10;
   playerMoney = 10;

   //other logic remains the same
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
        //if we are not at the last enemy in the array
        if (playerHealth > 0 && i < enemyNames.length - 1) {
          // ask if user wants to use the store before the next round
          var storeConfirm =  window.confirm("The fight is over, visit the shop before the next round.");
          // if yes go to the store functin
          if (storeConfirm) {
            shop();
          } 
        } // end enter the shop portion of the game
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    }
    //play again
    endGame();
  }; //end startGame funtion
  //begin endGame function
var endGame = function() {
  // if player is still alive
  if (playerHealth > 0) {
    window.alert("Great job, you have survived the game! You now have a score of " + playerMoney + ".");
  } else {
    window.alert("You have lost your robot in battle.");
  }
  var playAgainConfirm = window.confirm("Would you like to play again? ");

  if (playAgainConfirm) {
    //restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
}; //end endGame function
//begin shop function
var shop = function(){
//ask the player what they would like to do
var shopOptionPrompt =  window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL' , 'UPGRADE' , or 'LEAVE' to make a choice.");
switch (shopOptionPrompt) {
  case "REFILL":
  case "refill":
    window.alert("Refilling a player's health by 20 for 7 dollars");

    // increase health and decrease money
    playerHealth = playerHealth + 20;
    playerMoney = playerMoney - 7;
  break;

  case "UPGRADE":  
  case "upgrade":
      window.alert("Upgrading player's attack by 6 for 7 dollars");

    //increase attack and decrease money
    playerAttack = playerAttack + 6;
    playerMoney = playerMoney - 7;
  break;

    //leave the store
  case "LEAVE":
  case "leave":
    window.alert("Leaving the store");
    //do nothing so function will end
  break;

  default:
    window.alert("You did not pick a valid option, try again");
    // call shop again for player to pick a valid option
    shop();
  break;
}
}; //end shop function


//call the game to begin with
 startGame();
