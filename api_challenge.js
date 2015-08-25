var LolApi = require('leagueapi');
//var math = require('mathjs');

LolApi.init('2642bbe6-c6ce-4ba4-8594-0974b216dd5d', 'na');

// LolApi.Static.getChampionList(true, function(err, champs) {
//             console.log(champs.data);
// });

// LolApi.Summoner.getByName('YOLO Swag 5ever', function(err, summoner) {
//     if(!err) {
//         console.log(summoner);
//     }
// })

// //The wrapper also accepts promises:
// LolApi.Summoner.getByName('YOLO Swag 5ever')
// .then(function (summoner) {
//     console.log(summoner);
// });


var matches;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "NA.json", true);
oReq.send();

function reqListener(e) {
    matches = JSON.parse(this.responseText);
}

console.log(matches);
/*

LolApi.getMatch(1907069332, [true], 'na', function(err, match){
	//console.log(match.teams[0])
	var myFrameLast = match.timeline.frames[match.timeline.frames.length-1];
	var myFrame = match.timeline.frames;
	var bWBrawlers = [3611,3612,3613,3614,3615,3616,3617,3621,3622,3623,3624,3625,3626];
	var player = function (){
		this.win = 'Loss';
		this.brawler = '';
		this.upgrades = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	}
	var players = [new player,new player,new player,new player,new player,new player,new player,new player,new player,new player]
	if (match.teams[0].winner = true)
		players[0].win = players[1].win = players[2].win = players[3].win = players[4].win = 'Win';
	else
		players[5].win = players[6].win = players[7].win = players[8].win = players[9].win = 'Win';
	var events;
	for (var i = 1; i < myFrame.length; i++) {
		for (var j = 0; j < myFrame[i].events.length; j++) {	

			if (myFrame[i].events[j].eventType == 'ITEM_PURCHASED') {
				events = myFrame[i].events[j];
				if (events.itemId == 3611)
					players[events.participantId - 1].brawler = 'razorfins';
				if (events.itemId == 3612)
					players[events.participantId - 1].brawler = 'ironbacks';
				if (events.itemId == 3613)
					players[events.participantId - 1].brawler = 'plundercrabs';
				if (events.itemId == 3614)
					players[events.participantId - 1].brawler = 'ocklepods';
				if (events.itemId == 3615)
					players[events.participantId - 1].upgrades[0][0] =1;
				if (events.itemId == 3616)
					players[events.participantId - 1].upgrades[0][1] =1;
				if (events.itemId == 3617)
					players[events.participantId - 1].upgrades[0][2] =1;
				if (events.itemId == 3621)
					players[events.participantId - 1].upgrades[1][0] =1;
				if (events.itemId == 3622)
					players[events.participantId - 1].upgrades[1][1] =1;
				if (events.itemId == 3623)
					players[events.participantId - 1].upgrades[1][2] =1;
				if (events.itemId == 3624)
					players[events.participantId - 1].upgrades[2][0] =1;
				if (events.itemId == 3625)
					players[events.participantId - 1].upgrades[2][1] =1;
				if (events.itemId == 3626)
					players[events.participantId - 1].upgrades[2][2] =1;
				//if(bWBrawlers.indexOf(myFrame[i].events[j].itemId) > -1)
				

			};
		};
	};
	for (var i = players.length - 1; i >= 0; i--) {
		console.log("\nPlayer " + (i+1) + " Outcome: "+ players[i].win +"\n Brawler: " + players[i].brawler + " \n  Upgrades: " + players[i].upgrades);
	};
});*/