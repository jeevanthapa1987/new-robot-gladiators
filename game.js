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

//alert player's that they are starting the round
window.alert("Welcome to Robot Gladiators ."); 
//ask player if they would like to fight or run
var promptFight=window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
if(promptFight==="FIGHT" || promptFight==="fight"){
//subtract the value of "playerAttack"  from the value of "enemyHealth" and use that result to update the value in the "enemyHealth" variable
enemyHealth=enemyHealth-playerAttack
//log a resulting message to the console so we know how it worked
console.log(playerName + " attacked " +enemyName+ " ."+ enemyName+ " now has " + enemyHealth + " health remaining.");
//check enemy's health
if(enemyHealth<=0){
    window.alert(enemyName+ " has died.");
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
}
else{
    window.alert(playerName + " still has " + playerHealth+ " health left.");
}
}
else if(promptFight==="skip" || promptFight==="SKIP"){
//confirm player want to skip
var confirmSkip=window.confirm("Are you sure you would like to quit?")
if(confirmSkip){
window.alert(playerName+ " has decided to skip the fight.Goodbye.");
//subtract money from playerMoney for skipping
playerMoney=playerMoney-2;
}
//if no(false),ask question again by running fight() again
else{
    fight();
}
//if player did not chose 1 or 2 in prompt
}

else{
    window.alert("you need to choose a valid option.Try again.");
}

};
//run fight function to start game
//fight();
for(var i=0;i<enemyNames.length;i++){
fight(enemyNames[i]);
}
