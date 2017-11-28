var kak = 0;
var kpk = 1;
var kps = 0;
var kakFriendPrice = 10;
var kakFriends = 0;
var kakBakers = 0;
var kakBakerPrice = 17;
var kakPriests = 0;
var kakPriestPrice = 30;
var kakArmies = 0;
var kakArmyPrice = 200;
var goldenKakGuess = Math.floor(Math.random()*101);
function klick(kakperklick){
	kak+=kakperklick;
	document.getElementById("kakNum").innerHTML = kak+" kak";
	document.cookie = kak;
}
function getKakArmy(){
	if (kak>=kakArmyPrice) {
		kakArmies+=1
		kps+=50
		kak-=kakArmyPrice;
		kakArmyPrice+=kakArmyPrice/5;
		kakArmyPrice=Math.round(kakArmyPrice);
		document.getElementById("kps").innerHTML = kps+" kps";
		document.getElementById("kakNum").innerHTML = kak+" kak";
		document.getElementById("kakArmy").innerHTML = "Get Kak Army ("+kakArmyPrice+" kak) "+kakArmies;
	}
	else {
		alert("You do not have enough kak. GET MORE KAK");
	}
}
function getKakPriest(){
	if (kak>=kakPriestPrice) {
		kakPriests+=1
		kps+=2
		kak-=kakPriestPrice;
		kakPriestPrice+=kakPriestPrice/5;
		kakPriestPrice=Math.round(kakPriestPrice);
		document.getElementById("kps").innerHTML = kps+" kps";
		document.getElementById("kakNum").innerHTML = kak+" kak";
		document.getElementById("kakPriest").innerHTML = "Get Kak Priest ("+kakPriestPrice+" kak) "+kakPriests;
	}
	else {
		alert("You do not have enough kak. GET MORE KAK");
	}
}
function getKakFriend(){
	if (kak>=kakFriendPrice) {
		kakFriends+=1
		kps+=0.1;
		kak-=kakFriendPrice;
		kakFriendPrice+=kakFriendPrice/5;
		kakFriendPrice=Math.round(kakFriendPrice);
		document.getElementById("kps").innerHTML = kps+" kps";
		document.getElementById("kakNum").innerHTML = kak+" kak";
		document.getElementById("kakFriend").innerHTML = "Get Kak Friend ("+kakFriendPrice+" kak) "+kakFriends;
	}
	else {
		alert("You do not have enough kak. GET MORE KAK");
	}
}
function gatKakBaker() {
	if (kak>=kakBakerPrice) {
		kakBakers+=1;
		kps+=0.5;
		kak-=kakBakerPrice;
		kakBakerPrice+=kakBakerPrice/5;
		kakBakerPrice=Math.round(kakBakerPrice);
		document.getElementById("kps").innerHTML = kps+" kps";
		document.getElementById("kakNum").innerHTML = kak+" kak";
		document.getElementById("kakBaker").innerHTML = "Get Kak Baker ("+kakBakerPrice+" kak) "+kakBakers;
	}
	else {
		alert("You do not have enough kak. GET MORE KAK");
	}
}

var intervalID = window.setInterval(secondPassed, 1000);

function secondPassed() {
	kak+=kps;
	document.getElementById("kakNum").innerHTML = kak+" kak";
	kakName = document.getElementById("kakName").value;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function goldenKak{
	var goldenKakGuess = Math.floor(Math.random()*101)
	if (goldenKakGuess = Math.floor(Math.random()*101)) {
		document.getElementById("goldenKakImage").style.visibility="visible";
		await sleep(10000);
		document.getElementById("goldenKakImage").style.visibility="hidden";
	}
}

function goldenKakClicked() {
	alert("Nice job clicking that kak! You have pleased the kak gods and have been awarded 1000 kak!");
	kak+=1000;
}

function testScript(){
	alert("Script found");
}