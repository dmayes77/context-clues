	var friends = ['April', 'Jermaine', 'Rachel', 'Jessica', 'Carlos', 'David'];
	var locations = ['mall', 'library', 'carwash', 'kitchen', 'theatre', 'concert', 'airport', 'hotel', 'park', 'garage', 'grocery store'];
var weapons = ['hammer', 'hair bow', 'machete', 'soccerball', 'volleyball', 'gun', 'knife', 'paper clip', 'banana', 'car', 'cat', 'dog', 'rolling pin', 'wood chipper', 'shoe', 'chandelier', 'magarita', 'ink pen', 'spider', 'caramel', 'toothpick'] 

$(document).ready(() =>  {
	for (var i = 1; i <= 100; i++) {
		var h3 = $('<h3> Accusation ' + i + '</h3>');
		$('body').append(h3);
		var action = randomAcc(i);
		h3.click(action);
	}
	function randomAcc(num) {
		return function () {
			var name = num % friends.length;
			console.log(name);
			var place = num % locations.length;
			console.log(place);
			var weapon = num % weapons.length;
			console.log(weapon);
			alert('I accuse ' + friends[name] + ' with the ' + weapons[weapon] + ' in the ' + locations[place] + '!');
		}
	}
})

