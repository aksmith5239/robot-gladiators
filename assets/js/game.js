//Game States
// "WIN"  - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE"  - Player robot's health is 0 or less
//function to generate a random numeric value



//Alert users that they are starting the round
// window.alert("Welcome to Robot Gladiators!");

//fight function
var fight = function(enemy) {
  console.log(enemy);
// fight function statements
 //repeat and execute as long as the enemy robot is alive
while(enemy.health > 0 && playerInfo.health > 0) {
    var promtFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

//If player chooses to fight, then FIGHT!
if (promtFight === "skip" || promtFight === "SKIP") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
    //if yes (true), leave fight
    if (confirmSkip) {
        window.alert(playerInfo.name + " has chosen to skip the fight! Goodbye!");
        //subtract money from playerInfo.money for skipping
        playerInfo.money = Math.max(0, playerInfo.money - 10);
        console.log("playerInfo.money", playerInfo.money)
        break;
    } 
} 
    // remove enemy's health by subtracting the amount set in the player attack variable 
   var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

   enemy.health = Math.max(0, enemy.health - damage);
   // Log a resulting message to the console so we know that it worked.
   console.log(
   playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
   );
   
   //check enemy's health
   if (enemy.health <= 0) {
   window.alert(enemy.name + " has died!");
   //award player money for winning
   playerInfo.money = playerInfo.money + 20;
   //leave while loop since enemy is dead
//    break;
   } else {
   window.alert(enemy.name + " still has " + enemy.health + " health left");
   }
   // Subtract the value of `enemy.attack` from the value of `playerInfo.health` and use that result to update the value in the `playerInfo.health` variable.
   var damage = randomNumber(enemy.attack - 3, enemy.attack); 

   playerInfo.health = Math.max(0, playerInfo.health - damage);    
   // Log a resulting message into the console so we that that it worked. 
   console.log(
   enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
   );
   
   //check players health
   if(playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
   //leave while loop since player is dead
   } else {
   window.alert(playerInfo.name + " still has " + playerInfo.health + " health left");
        } 
     }
 }
 
 //FIGHT FOR LOOP
 var startGame = function() {
   //restart player stats
   playerInfo.reset(); // this references the reset method inside the playerInfo object.

   //other logic remains the same
    for (var i = 0; i < enemyInfo.length; i++) {
      if (playerInfo.health > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyObj = enemyInfo[i];
        pickedEnemyObj.health = randomNumber(40, 60);

        fight(pickedEnemyObj);
        //if we are not at the last enemy in the array
        if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
          // ask if user wants to use the store before the next round
          var storeConfirm =  window.confirm("The fight is over, visit the shop before the next round.");
          // if yes go to the store functin
          if (storeConfirm) {
            shop();
          } 
        } // end enter the shop portion of the game
      }
      else {
        window.alert("Oh, NOOOOOOOOOO!");
        break;
      }
    }
    //play again
    endGame();
  }; //end startGame funtion
  //begin endGame function
var endGame = function() {
  // if player is still alive
  if (playerInfo.health > 0) {
    window.alert("Great job, you have survived the game! You now have a score of " + playerInfo.money + ".");
  } else {
    window.alert("You have lost your robot in battle! Game Over!");
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
  //refill case
  case "REFILL":
  case "refill":
    playerInfo.refillHealth();
  break;
  //upgrade case
  case "UPGRADE":  
  case "upgrade":
     playerInfo.upgradeAttack();
  break;
    //leave the store
  case "LEAVE":
  case "leave":
    window.alert("Leaving the store. Thank you, come again soon.");
    //do nothing so function will end
  break;

  default:
    window.alert("You did not pick a valid option, try again");
    // call shop again for player to pick a valid option
    shop();
  break;
}
}; //end shop function
var randomNumber = function(min, max){
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
}; //end random number function

//playerInfo object
var playerInfo = {
  name: window.prompt("What is your Robot's name?"),
  health: 100, 
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack = 10;
  },  //do not put semi colon here - it will break code - use comma to separate one method from another
  refillHealth: function() {
    if (this.money >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
    } else {
      window.alert("You do not have enough money for this purchase");
    }
    
  }, 
  upgradeAttack: function() {
    if (this.money >= 7) {
     window.alert("Upgrading player's attack by 6 for 7 dollars"); 
    this.attack +=6;
    this.money -=7;
    } else {
      window.alert("You do not have enough money for this purchase");
    }
  } // no comma because it is end of methods
}; // end player object -  semi colon here to indicate end of object

// enemyInfo object array
var enemyInfo = [ 
  {
    name: "Roborto",
    attack: randomNumber(10, 14)
},
{
  name: "Amy Android",
  attack: randomNumber(10, 14)
},
{
  name: "Robo Trumble",
  attack: randomNumber(10, 14)
}
]; // end enemy object array

//call the game to begin with
 startGame();
