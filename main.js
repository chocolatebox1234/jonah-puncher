var game = {
score: 0,
totalScore: 0,
totalClicks: 0,
clickValue: 1,
version: 0.000,

addToScore: function(amount) {
this.score += amount;
this.totalScore += amount;
display.updateScore();
},

addToClicks: function(amount) {
this.totalClicks += amount;
this.totalClicks += amount;
display.updateClicks();
},

getScorePerSecond: function() {
var scorePerSecond = 0;
for (i = 0; i <building.name.length; i++) {
scorePerSecond += building.income[i] * building.count[i];
}
return scorePerSecond;
}
};

var building = {
name: [
"Wyatt",
"Nolen",
"Gavin",
"Brylan",
"Marcus",
"Karson",
"Wyatt Super Saiyan",
"Landen"
],
image: [
"Wyatt.png",
"Nolen.png",
"Gavin.png",
"Brylan.png",
"Marcus.png",
"Karson.png",
"Wyattsupersaiyan.png",
"Landen.png"
],
count: [0, 0, 0, 0, 0, 0, 0, 0],
income: [
1,
5,
70,
250,
500,
1000,
10000,
5000000
],
cost: [
15,
100,
1000,
3500,
7500,
15000,
50000,
25000000
],

purchase: function(index) {
if (game.score >= this.cost[index]) {
game.score -= this.cost[index];
this.count[index]++;
this.cost[index] = Math.ceil(this.cost[index] * 1.10);
display.updateScore();
display.updateShop();
display.updateUpgrades();
bleep4.play();
}
}
};

var upgrade = {
name: [
"Very Small Brass Knuckles",
"Very Small Spiked Knuckles",
"Spiked Finger",
"Small Brass Knuckles",
"Small Spiked Knuckles",
"Very Medium Brass Knuckles",
"Very Medium Spiked Knuckles",
"Medium Brass Knuckles",
"Medium Spiked Knuckles",
"Brass Knuckles",
"Spiked Knuckles",
"Rammer Hammer",
"Large Brass Knuckles",
"Large Spiked Knuckles",
"Wyatt Super Saiyan Blue",
"Wyatt Super Saiyan God",
"Finger Gun",
"Wyatt Ultra Instinct",
"Finger Cannon",
"Tennis Ball",
"Tennis Racquet",
"Finger Shotgun",
"Finger Minigun"
],
description: [
"Wyatt now punches three times harder",
"Wyatt now punches three times harder",
"Clicking now does three times the damage",
"Nolen now punches three times harder",
"Nolen now punches three times harder",
"Gavin now punches three times harder",
"Gavin now punches three times harder",
"Brylan now punches three times harder",
"Brylan now punches three times harder",
"Marcus now punches three times harder",
"Marcus now punches three times harder",
"Clicking now does three times the damage",
"Karson now punches three times harder",
"Karson now punches three times harder",
"Wyatt Super Saiyan now punches three times harder",
"Wyatt Super Saiyan now punches three times harder",
"Clicking now does three times the damage",
"Wyatt Super Saiyan now punches ten times harder",
"Clicking now does ten times the damage",
"Landen now punches twice as hard",
"Landen now punches three times as hard",
"Clicking now does ten times the damage",
"Clicking now does two hundred times the damage"
],
image: [
"brassknuckles.png",
"spikedknuckles.png",
"spikedfinger.png",
"brassknuckles.png",
"spikedknuckles.png",
"brassknuckles.png",
"spikedknuckles.png",
"brassknuckles.png",
"spikedknuckles.png",
"brassknuckles.png",
"spikedknuckles.png",
"rammerhammer.png",
"brassknuckles.png",
"spikedknuckles.png",
"Wyattsupersaiyanblue.png",
"Wyattsupersaiyangod.png",
"gun.png",
"Wyattsupersaiyanultrainstinct.png",
"cannon.png",
"tennisball.png",
"tennisracquet.png",
"shotgun.png",
"minigun.png"
],
type: [
"building",
"building",
"click",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"click",
"building",
"building",
"building",
"building",
"click",
"building",
"click",
"building",
"building",
"click",
"click"
],
cost: [
200,
550,
300,
1200,
2000,
10000,
15000,
11000,
17000,
12000,
20000,
1420,
18000,
26000,
37000,
50000,
5000,
10000000,
10000000,
25000000,
50000000,
20000000,
300000000000
],
buildingIndex: [
0,
0,
-1,
1,
1,
2,
2,
3,
3,
4,
4,
-1,
5,
5,
6,
6,
-1,
6,
-1,
7,
7,
-1,
-1
],
requirement: [
5,
10,
50,
8,
15,
12,
20,
13,
23,
15,
25,
1000,
18,
28,
30,
40,
10000,
80,
35000,
50,
70,
50000,
500000
],
bonus: [
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
3,
10,
10,
2,
3,
10,
200
],
purchased: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
	
purchase: function(index) {
if (!this.purchased[index] && game.score >= this.cost[index]) {
if (this.type[index] == "building" && building.count[this.buildingIndex[index]] >= this.requirement[index]) {
game.score -= this.cost[index];
building.income[this.buildingIndex[index]] *= this.bonus[index];
this.purchased[index] = true;
bleep5.play();

display.updateUpgrades();
display.updateScore();
}else if (this.type[index] == "click" && game.totalClicks >= this.requirement[index]) {
game.score -= this.cost[index];
game.clickValue *= this.bonus[index];
this.purchased[index] = true;

display.updateUpgrades();
display.updateScore();
}
}
}
};

var achievement = {
name: [
"Very Small Brass Knuckles",
"Very Small Spiked Knuckles",
"A Humble Start",
"Fingertastic",
"Small Brass Knuckles",
"Small Spiked Knuckles",
"Very Medium Brass Knuckles",
"Very Medium Spiked Knuckles",
"Medium Brass Knuckles",
"Medium Spiked Knuckles",
"Brass Knuckles",
"Spiked Knuckles",
"Large Brass Knuckles",
"Large Spiked Knuckles",
"Wyatt Super Saiyan Blue",
"Wyatt Super Saiyan God",
"Wyatt Super Saiyan Ultra Instinct",
"Veteran Clicker",
"Tennis Ball",
"Tennis Racquet"
],
description: [
"Buy 5 Wyatts",
"Buy 10 Wyatts",
"Punch Jonah 1 time",
"Punch Jonah 1000 times",
"Buy 8 Nolens",
"Buy 15 Nolens",
"Buy 12 Gavins",
"Buy 20 Gavins",
"Buy 13 Brylans",
"Buy 23 Brylans",
"Buy 15 Marcus's",
"Buy 25 Marcus's",
"Buy 18 Karsons",
"Buy 28 Karsons",
"Buy 30 Super Saiyan Wyatts",
"Buy 40 Super Saiyan Wyatts",
"Buy 80 Super Saiyan Wyatts",
"Punch Jonah 50000 Times",
"Buy 50 Landens",
"Buy 70 Landens"
],
image: [
"Wyattborder.png",
"Wyattborder.png",
"Jonahborder.png",
"jonahborder.png",
"Nolenborder.png",
"Nolenborder.png",
"Gavinborder.png",
"Gavinborder.png",
"Brylanborder.png",
"Brylanborder.png",
"Marcusborder.png",
"Marcusborder.png",
"Karsonborder.png",
"Karsonborder.png",
"Wyattsupersaiyanblue.png",
"Wyattsupersaiyangod.png",
"Wyattsupersaiyanultrainstinct.png",
"Jonahborder.png",
"Landenborder.png",
"Landenborder.png"
],
type: [
"building",
"building",
"click",
"click",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"building",
"click",
"building",
"building"
],
requirement: [
5,
10,
1,
1000,
8,
15,
12,
20,
13,
23,
15,
25,
18,
28,
30,
40,
80,
50000,
50,
70
],
objectIndex: [
0,
0,
-1,
-1,
1,
1,
2,
2,
3,
3,
4,
4,
5,
5,
6,
6,
6,
-1,
7,
7
],
awarded: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],

earn: function(index) {
this.awarded[index] = true;
}
}

var display = {
updateScore: function() {
document.getElementById("score").innerHTML = game.score;
document.getElementById("scorepersecond").innerHTML = game.getScorePerSecond();
document.getElementById("totalClicks").innerHTML = game.totalClicks;
document.title = game.score + " Punches - Jonah Puncher"
},

updateShop: function() {
document.getElementById("shopContainer").innerHTML = "";
for (i = 0; i < building.name.length; i++) {
document.getElementById("shopContainer").innerHTML += '<table class="shopButton unselectable" onclick="building.purchase('+i+')"><tr><td id="image"><img src="images/'+building.image[i]+'"></td><td id="nameAndCost"><p>'+building.name[i]+'</p><p><span>'+building.cost[i]+'</span> Punches</p></td><td id="amount"><span>'+building.count[i]+'</span></td></tr></table>'
}
},

updateUpgrades: function() {
document.getElementById("upgradeContainer").innerHTML = "";
for (i = 0; i < upgrade.name.length; i++) {
if (!upgrade.purchased[i]) {
if (upgrade.type[i] == "building" && building.count[upgrade.buildingIndex[i]] >= upgrade.requirement[i]) {
document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' Punches)" onclick="upgrade.purchase('+i+')">';
} else if (upgrade.type[i] == "click" && game.totalClicks >= upgrade.requirement[i]) {
document.getElementById("upgradeContainer").innerHTML += '<img src="images/'+upgrade.image[i]+'" title="'+upgrade.name[i]+' &#10; '+upgrade.description[i]+' &#10; ('+upgrade.cost[i]+' Punches)" onclick="upgrade.purchase('+i+')">';
}
}
}
},

updateAchievements: function() {
document.getElementById("achievementContainer").innerHTML = "";
for (i = 0; i < achievement.name.length; i++) {
if (achievement.awarded[i]) {
document.getElementById("achievementContainer").innerHTML += '<img src="images/'+achievement.image[i]+'" title="'+achievement.name[i]+' &#10; '+achievement.description[i]+'">';
}
}
}
};

function saveGame() {
var gameSave = {
score: game.score,
totalScore: game.totalScore,
totalClicks: game.totalClicks,
clickValue: game.clickValue,
version: game.version,
buildingCount: building.count,
buildingIncome: building.income,
buildingCost: building.cost,
upgradePurchased: upgrade.purchased,
achievementAwarded: achievement.awarded
};
localStorage.setItem("gameSave", JSON.stringify(gameSave));
}

function loadGame() {
var savedGame = JSON.parse(localStorage.getItem("gameSave"));
if (localStorage.getItem("gameSave") !== null) {
if (typeof savedGame.score !== "undefined") game.score = savedGame.score;
if (typeof savedGame.totalScore !== "undefined") game.totalScore = savedGame.totalScore;
if (typeof savedGame.totalClicks !== "undefined") game.totalClicks = savedGame.totalClicks;
if (typeof savedGame.clickValue !== "undefined") game.clickValue = savedGame.clickValue;
if (typeof savedGame.buildingCount !== "undefined") {
for (i = 0; i < savedGame.buildingCount.length; i++) {
building.count[i] = savedGame.buildingCount[i];
}
}
if (typeof savedGame.buildingCount !== "undefined") {
for (i = 0; i < savedGame.buildingCount.length; i++) {
building.count[i] = savedGame.buildingCount[i];
}

if (typeof savedGame.buildingCost !== "undefined") {
for (i = 0; i < savedGame.buildingCost.length; i++) {
building.cost[i] = savedGame.buildingCost[i];
}
}
if (typeof savedGame.upgradePurchased !== "undefined") {
for (i = 0; i < savedGame.upgradePurchased.length; i++) {
upgrade.purchased[i] = savedGame.upgradePurchased[i];
}
}
if (typeof savedGame.achievementAwarded !== "undefined") {
for (i = 0; i < savedGame.achievementAwarded.length; i++) {
achievement.awarded[i] = savedGame.achievementAwarded[i];
}
}
}
}

function fadeOut(element, duration, finalOpacity, callback) {
	let opacity = 1;
	
	let elementFadingInterval = window.setInterval(function() {
		opacity -= 50 / duration;
		
		if (opacity <= finalOpacity) {
			clearInterval(elementFadingInterval);
			callback();
		}
		
		element.style.opacity = opacity;
	}, 50);
}

function createNumberOnClicker(event) {
	let clicker = document.getElementById("clicker");
	
	let clickerOffset = clicker.getBoundingClientRect();
	let position = {
		x: event.pageX - clickerOffset.left,
		y: event.pageY - clickerOffset.top,
	}
	
	let element = document.createElement("div");
	element.textContent = "+" + game.clickValue;
	element.classList.add("number", "unselectable");
	element.style.left = position.x + "px";
	element.style.top = position.y + "px";

	
	clicker.appendChild(element);
	
	let movementInterval = window.setInterval(function() {
		if (typeof element == "undefined" && element == null) clearInterval(movementInterval)
		
		position.y--;
		element.style.top = position.y + "px";
	}, 10);
	
	fadeOut(element, 1000, 0.5, function() {
		element.remove();
	});
}

document.getElementById("clicker").addEventListener("click", function(event) {
	game.totalClicks++;
	game.addToScore(game.clickValue);
	
	createNumberOnClicker(event);
}, false);}

window.onload = function() {
loadGame();
display.updateScore();
display.updateUpgrades();
display.updateAchievements();
display.updateShop();
};

setInterval(function() {
for (i = 0; i < achievement.name.length; i++) {
	if (achievement.type[i] == "score" && game.totalScore >= achievement.requirement[i]) achievement.earn(i);
	else if (achievement.type[i] == "click" && game.totalClicks >= achievement.requirement[i]) achievement.earn(i);
	else if (achievement.type[i] == "building" && building.count[achievement.objectIndex[i]] >= achievement.requirement[i]) achievement.earn(i);
}

game.score += game.getScorePerSecond();
game.totalScore += game.getScorePerSecond();
display.updateScore();
display.updateAchievements();
}, 1000); // 1000ms = 1 second

setInterval (function() {
display.updateScore();
display.updateUpgrades();
}, 10000);

setInterval(function() {
saveGame();
}, 10000); // 10000ms = 10 seconds

setInterval (function() {
location.reload();
}, 40000); 

document.addEventListener("keydown",function(event) {
if (event.ctrlKey && event.which == 83) { // ctrl + s
event.preventDefault();
saveGame();
}
}, false);