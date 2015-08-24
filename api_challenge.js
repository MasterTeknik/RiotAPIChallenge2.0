var LolApi = require('leagueapi');

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


LolApi.getMatch(1907069332, [true], 'na', function(err, match){
	var myFrameLast = match.timeline.frames[match.timeline.frames.length-1];
	var myFrameFirst = match.timeline.frames[1];

	//console.log( myFrameFirst.events );

	for (var i = 0; i < myFrameFirst.events.length; i++) {	

		if (myFrameFirst.events[i].eventType == 'ITEM_PURCHASED') {

			console.log( myFrameFirst.events[i] );

		};
	};

	//console.log(match);
});