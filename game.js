var playerName = window.prompt("What is your robot's name ?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;

//You can also log multiple values at once like this
//console.log(playerName,playerHealth,playerAttack);

//var enemyName="Roborto";
var enemyNames=["Roborto","Amy Android","Robo Trumble"];
var enemyHealth=50;
var enemyAttack=12;
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);


var fight = function(enemyName){
//repeat and execute as long as enemy-robot is alive
while(playerHealth > 0 && enemyHealth > 0){
//alert player's that they are starting the round
window.alert("Welcome to Robot Gladiators ."); 
//ask player if they would like to fight or run
var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if(promptFight==="skip" || promptFight==="SKIP"){
    //confirm player want to skip
    var confirmSkip=window.confirm("Are you sure you would like to quit?")
    if(confirmSkip){
    window.alert(playerName+ " has decided to skip the fight.Goodbye.");
    //subtract money from playerMoney for skipping
    playerMoney=playerMoney-10;
    console.log("playerMoney",playerMoney);
    break;
    }
    }
 // remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
        playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
      );
//check enemy's health
if(enemyHealth<=0){
    window.alert(enemyName+ " has died.");
    // award player money for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemy is dead
    break;
}
else{
    window.alert(enemyName+" still has " +enemyHealth+ " health left.");
}
//subtract the value of "enemyAttack"  from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable
playerHealth=playerHealth-enemyAttack;
//log a resulting message to the console so we know how it worked
console.log(enemyName+ " attacked " + playerName+" ." +playerName + " now has " +playerHealth+ " health remaining.");
if(playerHealth<=0){
    window.alert(playerName+ " has died.");
    break;
}
else{
    window.alert(playerName + " still has " + playerHealth+ " health left.");
}
}
 }

//run fight function to start game
//fight();

for(var i=0;i<enemyNames.length;i++){
if(playerHealth > 0){
// let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
window.alert("Welcome to robot gladiators. Round " + ( i + 1 ) );
  // pick new enemy to fight based on the index of the enemyNames array
var pickedEnemyName=enemyNames[i];
 // reset enemyHealth before starting new fight
enemyHealth=50;
// pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
fight(pickedEnemyName);
}
else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
