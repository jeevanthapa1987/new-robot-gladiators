//function to generate a random numeric value
var randomNumber = function(min,max) {
  var value = Math.floor(Math.random() * (max-min+1) + min);
  return value;
};

/*
var playerName = window.prompt("What is your robot's name ?");
var playerHealth=100;
var playerAttack=10;
var playerMoney=10;
*/

//You can also log multiple values at once like this
//console.log(playerName,playerHealth,playerAttack);

//var enemyName="Roborto";
/*
var enemyNames=["Roborto","Amy Android","Robo Trumble"];
var enemyHealth=50;
var enemyAttack=12;
console.log(enemyNames);
console.log(enemyNames[0]);
console.log(enemyNames[1]);
console.log(enemyNames[2]);
console.log(enemyNames.length);
*/

var fight = function(enemy){
//repeat and execute as long as enemy-robot is alive
while(playerInfo.health > 0 && enemy.health > 0){
//alert player's that they are starting the round
window.alert("Welcome to Robot Gladiators ."); 
//ask player if they would like to fight or run
var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

if(promptFight==="skip" || promptFight==="SKIP"){
    //confirm player want to skip
    var confirmSkip=window.confirm("Are you sure you would like to quit?")
    if(confirmSkip){
    window.alert(playerInfo.name+ " has decided to skip the fight.Goodbye.");
    //subtract money from playerMoney for skipping
    //playerMoney=playerMoney-10;
    playerInfo.money=Math.max(0,playerInfo.money-10);
    console.log("playerInfo.money",playerInfo.money);
    break;
    }
    }
 // remove enemy's health by subtracting the amount set in the playerAttack variable
      //enemyHealth = enemyHealth - playerAttack;
     // enemyHealth = Math.max(0,enemyHealth-playerAttack);
     //generate random damage value based on player's attack power
     var damage = randomNumber(playerInfo.attack-3,playerInfo.attack);
     enemy.health=Math.max(0,enemy.health-damage);
      console.log(
        playerInfo.name + ' attacked ' + enemy.name + '. ' + enemy.name + ' now has ' + enemy.health + ' health remaining.'
      );
//check enemy's health
if(enemy.health<=0){
    window.alert(enemy.name+ " has died.");
    // award player money for winning
    playerInfo.money = playerInfo.money + 20;

    // leave while() loop since enemy is dead
    break;
}
else{
    window.alert(enemy.name+" still has " +enemy.health+ " health left.");
}
//subtract the value of "enemyAttack"  from the value of "playerHealth" and use that result to update the value in the "playerHealth" variable
//playerHealth=playerHealth-enemyAttack;
//playerHealth=Math.max(0,playerHealth-enemyAttack);

var damage = randomNumber(enemy.attack - 3, enemy.attack);

playerInfo.health = Math.max(0, playerInfo.health - damage);

//log a resulting message to the console so we know how it worked
console.log(enemy.name+ " attacked " + playerInfo.name+" ." +playerInfo.name + " now has " +playerInfo.health + " health remaining.");
if(playerInfo.health<=0){
    window.alert(playerInfo.name + " has died.");
    break;
}
else{
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
}
}
 }

//run fight function to start game
//fight();






//function to start a new game
var startGame = function() {
  // reset player stats
  playerInfo.reset();
    
  playerInfo.health = 100;
  playerInfo.attack = 10;
  playerInfo.money = 10;
for(var i=0;i<enemyInfo.length;i++){
if(playerInfo.health > 0){
// let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
window.alert("Welcome to robot gladiators. Round " + ( i + 1 ) );
  // pick new enemy to fight based on the index of the enemyNames array
//var pickedEnemyName=enemyNames[i];
var pickedEnemyObj = enemyInfo[i];
 // reset enemyHealth before starting new fight
//enemyHealth=50;
//enemyHealth = Math.floor(Math.random()*60);
//enemyHealth = Math.floor(Math.random()*21) + 40;
//enemyHealth = randomNumber(40,60);
pickedEnemyObj.health = randomNumber(40, 60);
// pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
//fight(pickedEnemyName);
fight(pickedEnemyObj);
// if we're not at the last enemy in the array
if(playerInfo.health > 0 && i < enemyInfo.length-1){
// ask if player wants to use the store before next round
var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

// if yes, take them to the store() function
if (storeConfirm) {
  shop();
}
}
}
else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }
}
 // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
endGame();
}
// function to end the entire game
var endGame = function() {
 // if player is still alive, player wins!
 if (playerInfo.health > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
  // ask player if they'd like to play again
  var playAgainConfirm=window.confirm("Would you like to play again?");
  if(playAgainConfirm){
    startGame();
  }
  else{
    window.alert("Thank you for playing.Come back soon.");
  }
  };
  var shop = function() {
 // ask player what they'd like to do
 var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  //use switch to carry out action
switch(shopOptionPrompt){
    case "REFILL": // new case
    case "refill":
      playerInfo.refillHealth();
      break;
        if(playerInfo.money >= 7){
    window.alert("Refiling player's health by 20 for 7 dollars.");
    //increase health and decrease money
    playerInfo.health = playerInfo.health + 20;
    playerInfo.money = playerInfo.money - 7;
        }
        else {
            window.alert("You don't have enough money!");
          }
    break;
    case "UPGRADE": // new case
    case "upgrade":
      playerInfo.upgradeAttack();
      break;
        if(playerInfo.money >= 7){      
window.alert("Upgrading player's attack by 6 for 7 dollars.")
//increase attack and decrease money
playerInfo.attack = playerInfo.attack + 6;
playerInfo.money = playerInfo.money - 7;
        }
        else {
            window.alert("You don't have enough money!");
          }      
break;
case "LEAVE": // new case
case "leave":
    window.alert("Leaving the store.");
     // do nothing, so function will end
     break;
     default:
window.alert("You did not pick a valid option.Try again.");
//call shop() again to force player to pick a valid option
shop();
break;
}
  };
  var playerInfo = {
    name:window.prompt("What is your robot's name ?"),
    health:100,
    attack:10,
    money:10,
    reset: function() {
      this.health = 100;
      this.money = 10;
      this.attack = 10;
    },
    refillHealth:function(){
      if(this.money >= 7){
    window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -= 7;
      }
      else {
        window.alert("You don't have enough money!");
      }  
    },
    upgradeAttack:function(){
      if(this.money >= 7){
      this.attack += 6;
      this.money -= 7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  }
 
  }
  var enemyInfo=[
    {
      name:"Roberto",
      attack: randomNumber(10, 14)
    },
    {
      name:"Amy Android",
      attack: randomNumber(10, 14)
    },
    {
      name:"Robo trumble",
      attack: randomNumber(10, 14)
    }
  ];
// start the game when the page loads
startGame();

