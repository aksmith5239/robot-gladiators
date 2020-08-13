//Game States
// "WIN"  - Player robot has defeated all enemy robots
//      * Fight all enemy robots
//      * Defeat each enemy robot
// "LOSE"  - Player robot's health is 0 or less

//player variables
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
//    window.alert(enemyName + " has died!");
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
 
 //FIGHT LOOP
//  var startGame = function() {
    for (var i = 0; i < enemyNames.length; i++) {
      if (playerHealth > 0) {
        window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
      }
      else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
      }
    };

 
