	var kak = 0;
	var kpk = 1;
	var kps = 0;
	var kakFriendPrice = 10;
	var kakFriends = 0;
	var kakBakers = 0;
	var kakBakerPrice = 17;
	function klick(kakperklick){
		kak+=kakperklick;
		document.getElementById("kakNum").innerHTML = kak+" kak";
	}
	function getKakFriend(){
		if (kak>kakFriendPrice-1) {
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
		if (kak>kakBakerPrice-1) {
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
	}