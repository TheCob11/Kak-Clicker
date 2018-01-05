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
function klick(kakperklick){
	changeKak(kpk);
}
function changeKak(changedKak){
	kak+=changedKak;
	kak=Math.round(10*kak)/10
	document.getElementById("kakNum").innerHTML = kak+" kak";
	if (kak==Infinity){
		alert("TOO MUCH KAK")
	}
}
function getKakArmy(){
	if (kak>=kakArmyPrice) {
		kakArmies+=1
		kps+=50
		changeKak(kakArmyPrice*-1)
		kakArmyPrice+=kakArmyPrice/5;
		kakArmyPrice=Math.round(kakArmyPrice);
		kps=Math.round(10*kps)/10
		document.getElementById("kps").innerHTML = kps+" kps";
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
		changeKak(kakPriestPrice*-1)
		kakPriestPrice+=kakPriestPrice/5;
		kakPriestPrice=Math.round(kakPriestPrice);
		kps=Math.round(10*kps)/10
		document.getElementById("kps").innerHTML = kps+" kps";
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
		changeKak(kakFriendPrice*-1)
		kakFriendPrice+=kakFriendPrice/5;
		kakFriendPrice=Math.round(kakFriendPrice);
		kps=Math.round(10*kps)/10
		document.getElementById("kps").innerHTML = kps+" kps";
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
		changeKak(kakBakerPrice*-1)
		kakBakerPrice+=kakBakerPrice/5;
		kakBakerPrice=Math.round(kakBakerPrice);
		kps=Math.round(10*kps)/10
		document.getElementById("kps").innerHTML = kps+" kps";
		document.getElementById("kakBaker").innerHTML = "Get Kak Baker ("+kakBakerPrice+" kak) "+kakBakers;
	}
	else {
		alert("You do not have enough kak. GET MORE KAK");
	}
}

var intervalID = window.setInterval(secondPassed, 1000);

function secondPassed() {
	changeKak(kps);
}
function testScript(){
	alert("Script found");
}
