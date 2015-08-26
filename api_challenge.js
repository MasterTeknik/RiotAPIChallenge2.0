var LolApi = require('leagueapi');

LolApi.init('2642bbe6-c6ce-4ba4-8594-0974b216dd5d', 'na');

/*
var matches;

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "NA.json", true);
oReq.send();

function reqListener(e) {
    matches = JSON.parse(this.responseText);
}*/

var bWMatches;
getMatchList();
var player = function (){
	this.brawler = [0,0,0,0];//razorfins,ironbacks,plundercrabs,ocklepods
	this.upgrades = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];//Ability,Offense,Defense
}
var win = new player;
var loss = new player;
//getMatches(1);
getMatches(bWMatches.length);
function getMatches (i) {
	i -= 1;	
	if (i >= 0 ){
		setTimeout(function () {
			LolApi.getMatch(bWMatches[i], [true], 'na', function(err, match){
				if(match != null) {
					var myFrame = match.timeline.frames;
					var players;
					var winner
					if (match.teams[0].winner = true)
						winner = [1,2,3,4,5];
					else 
						winner = [6,7,8,9,10];
					var events;
					if(myFrame.length){
						for (var k = 1; k < myFrame.length; k++) {
							
							while(myFrame[k].events == null && k < myFrame.length)
									k++;
							for (var j = 0; j < myFrame[k].events.length; j++) {	

								if (myFrame[k].events[j].eventType == 'ITEM_PURCHASED') {
									events = myFrame[k].events[j];
									if (winner.indexOf(events.participantId) > -1)
										players = win;
									else
										players = loss;
									
									if (events.itemId == 3611)
										players.brawler[0] += 1;//razorfins
									if (events.itemId == 3612)
										players.brawler[1] += 1;//ironbacks
									if (events.itemId == 3613)
										players.brawler[2] += 1;//plundercrabs
									if (events.itemId == 3614)
										players.brawler[3] += 1;//ocklepods
									if (events.itemId == 3615)
										players.upgrades[0][0] +=1;
									if (events.itemId == 3616)
										players.upgrades[0][1] +=1;
									if (events.itemId == 3617)
										players.upgrades[0][2] +=1;
									if (events.itemId == 3621)
										players.upgrades[1][0] +=1;
									if (events.itemId == 3622)
										players.upgrades[1][1] +=1;
									if (events.itemId == 3623)
										players.upgrades[1][2] +=1;
									if (events.itemId == 3624)
										players.upgrades[2][0] +=1;
									if (events.itemId == 3625)
										players.upgrades[2][1] +=1;
									if (events.itemId == 3626)
										players.upgrades[2][2] +=1;
								}
							}
						}
					}
					console.log("\n"+i+ " Many matches left");
					if(i == 0)
						console.log("\nWins:\n Brawler: " + win.brawler[0] + " razorfins " + win.brawler[1] + " ironbacks " + win.brawler[2] + 
							" plundercrabs " + win.brawler[3] + " ocklepods \n  Upgrades:"+ win.upgrades + "\nLosses:\n Brawler: " + loss.brawler[0] + 
							" razorfins " + loss.brawler[1] + " ironbacks " + loss.brawler[2] + " plundercrabs " + loss.brawler[3] + 
							" ocklepods \n  Upgrades:"+ loss.upgrades);
				}else{
					console.log("\nWins:\n Brawler: " + win.brawler[0] + " razorfins " + win.brawler[1] + " ironbacks " + win.brawler[2] + 
							" plundercrabs " + win.brawler[3] + " ocklepods \n  Upgrades:"+ win.upgrades + "\nLosses:\n Brawler: " + loss.brawler[0] + 
							" razorfins " + loss.brawler[1] + " ironbacks " + loss.brawler[2] + " plundercrabs " + loss.brawler[3] + 
							" ocklepods \n  Upgrades:"+ loss.upgrades + "\n");
					console.log(err + " MatchId: " + bWMatches[i]);
				}
			});
			getMatches(i);
		},1300);
	}else{
		
		return;
	}
}

function getMatchList(){
bWMatches = [
1907411829, 
1907411881, 
1907412084, 
1907412119, 
1907412288, 
1907412620, 
1907413120, 
1907413132, 
1907413144, 
1907413395, 
1907413407, 
1907413486, 
1907413646, 
1907413661, 
1907413893, 
1907413922, 
1907414229, 
1907414561, 
1907414672, 
1907419768, 
1907419873, 
1907419919, 
1907420496, 
1907375191, 
1907382074, 
1907383079, 
1907383358, 
1907384021, 
1907384488, 
1907384585, 
1907384658, 
1907384678, 
1907385225, 
1907385416, 
1907386057, 
1907386082, 
1907386306, 
1907386348, 
1907386513, 
1907386995, 
1907387083, 
1907387089, 
1907387142, 
1907387571, 
1907387629, 
1907387762, 
1907387798, 
1907387852, 
1907387937, 
1907388091, 
1907388383, 
1907388401, 
1907388556, 
1907388641, 
1907388656, 
1907388800, 
1907388817, 
1907388846, 
1907388899, 
1907388990, 
1907389066, 
1907389097, 
1907389115, 
1907389147, 
1907389242, 
1907389326, 
1907389340, 
1907389451, 
1907389583, 
1907391464, 
1907392086, 
1907392146, 
1907392305, 
1907392362, 
1907392495, 
1907392969, 
1907392971, 
1907393234, 
1907393549, 
1907393587, 
1907393607, 
1907393663, 
1907393665, 
1907393917, 
1907394065, 
1907394076, 
1907394118, 
1907394138, 
1907394315, 
1907394324, 
1907394356, 
1907394422, 
1907394430, 
1907394585, 
1907394660, 
1907394740, 
1907394783, 
1907394819, 
1907394911, 
1907395115, 
1907395121, 
1907395237, 
1907395326, 
1907395346, 
1907395493, 
1907395499, 
1907395684, 
1907395862, 
1907395867, 
1907395880, 
1907395891, 
1907395963, 
1907395983, 
1907396113, 
1907396125, 
1907396306, 
1907396391, 
1907396408, 
1907396415, 
1907396509, 
1907396519, 
1907396739, 
1907396966, 
1907396986, 
1907397194, 
1907397207, 
1907397470, 
1907397482, 
1907397879, 
1907398018, 
1907398218, 
1907398289, 
1907400538, 
1907400674, 
1907401156, 
1907401494, 
1907401595, 
1907401773, 
1907402885, 
1907403012, 
1907403078, 
1907403125, 
1907403314, 
1907403367, 
1907403484, 
1907403565, 
1907403576, 
1907403649, 
1907404147, 
1907404223, 
1907404390, 
1907404482, 
1907404609, 
1907404946, 
1907405315, 
1907405511, 
1907405548, 
1907405833, 
1907405846, 
1907405974, 
1907406414, 
1907406430, 
1907406726, 
1907406745, 
1907407027, 
1907407177, 
1907407194, 
1907407532, 
1907407965, 
1907407984, 
1907408070, 
1907408134, 
1907408153, 
1907408288, 
1907408506, 
1907409230, 
1907409235, 
1907409391, 
1907409404, 
1907409433, 
1907409600, 
1907409673, 
1907409685, 
1907409767, 
1907409806, 
1907409830, 
1907409885, 
1907409969, 
1907410194, 
1907410250, 
1907410263, 
1907410279, 
1907410339, 
1907410490, 
1907410524, 
1907410631, 
1907410637, 
1907410720, 
1907410739, 
1907410829, 
1907410833, 
1907411039, 
1907411122, 
1907411157, 
1907411164, 
1907411309, 
1907411373, 
1907411494, 
1907411507, 
1907411565, 
1907411579, 
1907411693, 
1907411712, 
1907411868, 
1907411948, 
1907412091, 
1907412210, 
1907412278, 
1907412336, 
1907412562, 
1907412616, 
1907412636, 
1907412704, 
1907413076, 
1907413094, 
1907413123, 
1907413653, 
1907414020, 
1907414033, 
1907414077, 
1907414089, 
1907414218, 
1907414224, 
1907414275, 
1907414292, 
1907414667, 
1907414757, 
1907414849, 
1907414951, 
1907414955, 
1907415120, 
1907415129, 
1907415150, 
1907415162, 
1907415194, 
1907415281, 
1907415379, 
1907415458, 
1907415515, 
1907415656, 
1907415681, 
1907415907, 
1907416343, 
1907416450, 
1907416491, 
1907419756, 
1907419786, 
1907419942, 
1907420236, 
1907420468, 
1907420473, 
1907420614, 
1907420694, 
1907420781, 
1907420965, 
1907421117, 
1907421207, 
1907421244, 
1907421310, 
1907421412, 
1907421471, 
1907421500, 
1907421754, 
1907421762, 
1907379509, 
1907384548, 
1907384643, 
1907384860, 
1907385391, 
1907385826, 
1907385914, 
1907386401, 
1907386643, 
1907386653, 
1907386883, 
1907386987, 
1907387088, 
1907387654, 
1907388066, 
1907388324, 
1907388399, 
1907388572, 
1907388826, 
1907388986, 
1907389068, 
1907389126, 
1907389233, 
1907389445, 
1907389560, 
1907389709, 
1907392099, 
1907392469, 
1907392615, 
1907393225, 
1907393412, 
1907393596, 
1907393952, 
1907394090, 
1907394109, 
1907394207, 
1907394311, 
1907394330, 
1907394418, 
1907394494, 
1907394590, 
1907394675, 
1907394685, 
1907394731, 
1907394789, 
1907394920, 
1907395072, 
1907395116, 
1907395176, 
1907395184, 
1907395239, 
1907395324, 
1907395350, 
1907395418, 
1907395484, 
1907395512, 
1907395529, 
1907395646, 
1907395691, 
1907395701, 
1907395790, 
1907395863, 
1907395957, 
1907395988, 
1907396027, 
1907396034, 
1907396115, 
1907396180, 
1907396200, 
1907396262, 
1907396291, 
1907396302, 
1907396390, 
1907396421, 
1907396464, 
1907396477, 
1907396532, 
1907396757, 
1907396991, 
1907397140, 
1907397147, 
1907397353, 
1907397485, 
1907397487, 
1907397525, 
1907397889, 
1907397964, 
1907397988, 
1907398027, 
1907398055, 
1907398213, 
1907398268, 
1907398305, 
1907398319, 
1907398351, 
1907398361, 
1907398367, 
1907398463, 
1907398513, 
1907398756, 
1907398956, 
1907399231, 
1907403306, 
1907403792, 
1907403918, 
1907404479, 
1907404554, 
1907404576, 
1907404695, 
1907404705, 
1907404950, 
1907404952, 
1907405496, 
1907405972, 
1907405981, 
1907406148, 
1907406410, 
1907406736, 
1907407032, 
1907407182, 
1907407362, 
1907407546, 
1907407832, 
1907407854, 
1907407866, 
1907407951, 
1907408088, 
1907408198, 
1907408214, 
1907408260, 
1907408271, 
1907408497, 
1907408553, 
1907408678, 
1907408793, 
1907408796, 
1907408834, 
1907408848, 
1907409152, 
1907409282, 
1907409376, 
1907409394, 
1907409410, 
1907409430, 
1907409615, 
1907409641, 
1907409790, 
1907409823, 
1907410277, 
1907410513, 
1907410530, 
1907410546, 
1907410553, 
1907410562, 
1907410626, 
1907410733, 
1907410837, 
1907410843, 
1907410911, 
1907411119, 
1907411188, 
1907411307, 
1907411461, 
1907411558, 
1907411578, 
1907411639, 
1907411697, 
1907411704, 
1907411859, 
1907411997, 
1907412269, 
1907412273, 
1907412340, 
1907412576, 
1907412630, 
1907412678, 
1907413075, 
1907413092, 
1907413145, 
1907413404, 
1907413483, 
1907413553, 
1907413627, 
1907413649, 
1907413885, 
1907413931, 
1907414258, 
1907414491, 
1907414538, 
1907414653, 
1907414682, 
1907414735, 
1907414926, 
1907414986, 
1907415154, 
1907415310, 
1907415466, 
1907415649, 
1907415741, 
1907415915, 
1907416225, 
1907416350, 
1907416437, 
1907416488, 
1907416727, 
1907416737, 
1907416753, 
1907416947, 
1907416950, 
1907416961, 
1907417127, 
1907417510, 
1907417573, 
1907417622, 
1907418052, 
1907418149, 
1907419931, 
1907419943, 
1907420000, 
1907420006, 
1907420051, 
1907420235, 
1907420461, 
1907420477, 
1907420490, 
1907420519, 
1907420778, 
1907420976, 
1907421238, 
1907421254, 
1907421287, 
1907421357, 
1907421422, 
1907421688, 
1907421767, 
1907422788, 
1907423171, 
1907423348, 
1907423851, 
1907387960, 
1907388332, 
1907388397, 
1907389113, 
1907389342, 
1907389433, 
1907390474, 
1907393409, 
1907394417, 
1907394509, 
1907394666, 
1907394828, 
1907394885, 
1907395075, 
1907395108, 
1907395165, 
1907395222, 
1907395319, 
1907395336, 
1907395489, 
1907395511, 
1907395687, 
1907395729, 
1907395789, 
1907395954, 
1907395969, 
1907395975, 
1907396024, 
1907396052, 
1907396119, 
1907396171, 
1907396253, 
1907396292, 
1907396297, 
1907396303, 
1907396471, 
1907396529, 
1907397159, 
1907397257, 
1907397272, 
1907397281, 
1907397495, 
1907397869, 
1907398068, 
1907398086, 
1907398181, 
1907398259, 
1907398378, 
1907398385, 
1907399044, 
1907399151, 
1907399154, 
1907399226, 
1907399333, 
1907399491, 
1907399501, 
1907403370, 
1907404713, 
1907405507, 
1907405628, 
1907405971, 
1907407175, 
1907407331, 
1907407352, 
1907407846, 
1907408003, 
1907408087, 
1907408126, 
1907408143, 
1907408207, 
1907408274, 
1907408277, 
1907408515, 
1907408563, 
1907408698, 
1907408840, 
1907409172, 
1907409221, 
1907409237, 
1907409244, 
1907409365, 
1907409385, 
1907409405, 
1907409417, 
1907409648, 
1907409683, 
1907409689, 
1907409784, 
1907409814, 
1907409824, 
1907409972, 
1907410205, 
1907410274, 
1907410366, 
1907410508, 
1907410549, 
1907410646, 
1907411029, 
1907411045, 
1907411299, 
1907411318, 
1907411388, 
1907411583, 
1907411648, 
1907411703, 
1907412000, 
1907412100, 
1907412190, 
1907412215, 
1907412281, 
1907412327, 
1907412579, 
1907412637, 
1907412682, 
1907413081, 
1907413139, 
1907413399, 
1907413504, 
1907413635, 
1907413882, 
1907413888, 
1907413919, 
1907414025, 
1907414212, 
1907414230, 
1907414279, 
1907414535, 
1907414546, 
1907414846, 
1907414931, 
1907414936, 
1907414944, 
1907414978, 
1907414991, 
1907415114, 
1907415157, 
1907415511, 
1907415680, 
1907416229, 
1907416326, 
1907416439, 
1907416456, 
1907416498, 
1907416725, 
1907416745, 
1907416788, 
1907416802, 
1907417192, 
1907417199, 
1907417207, 
1907417221, 
1907417294, 
1907417389, 
1907417525, 
1907417872, 
1907417945, 
1907418038, 
1907418058, 
1907418161, 
1907418291, 
1907418572, 
1907418584, 
1907418670, 
1907419463, 
1907419850, 
1907419856, 
1907420001, 
1907420038, 
1907420216, 
1907420222, 
1907420451, 
1907420486, 
1907420533, 
1907420603, 
1907420613, 
1907420766, 
1907420865, 
1907421159, 
1907421209, 
1907421249, 
1907421296, 
1907421373, 
1907421405, 
1907421463, 
1907421515, 
1907421536, 
1907421622, 
1907421689, 
1907421799, 
1907421806, 
1907422410, 
1907422420, 
1907422436, 
1907422439, 
1907422562, 
1907422665, 
1907422786, 
1907422867, 
1907423163, 
1907423172, 
1907423337, 
1907423350, 
1907423665, 
1907423667, 
1907423975, 
1907423983, 
1907424476, 
1907424485, 
1907424517, 
1907425081, 
1907425283, 
1907425463, 
1907429985, 
1907430158, 
1907430509, 
1907430608, 
1907430667, 
1907385459, 
1907387918, 
1907389421, 
1907389449, 
1907393039, 
1907393609, 
1907393912, 
1907394431, 
1907394582, 
1907395224, 
1907395248, 
1907395314, 
1907395658, 
1907395697, 
1907395859, 
1907395948, 
1907396169, 
1907396272, 
1907396304, 
1907396377, 
1907396413, 
1907396474, 
1907396479, 
1907396504, 
1907397144, 
1907397220, 
1907397287, 
1907397347, 
1907397479, 
1907397864, 
1907397985, 
1907398063, 
1907398165, 
1907398226, 
1907398273, 
1907398301, 
1907398336, 
1907398415, 
1907398429, 
1907398554, 
1907398676, 
1907398682, 
1907398760, 
1907398776, 
1907398871, 
1907398883, 
1907398911, 
1907398925, 
1907398940, 
1907398976, 
1907398990, 
1907399065, 
1907399147, 
1907399327, 
1907399334, 
1907399406, 
1907404463, 
1907404625, 
1907405561, 
1907406163, 
1907406291, 
1907406682, 
1907407553, 
1907407834, 
1907408147, 
1907408283, 
1907408685, 
1907408706, 
1907408850, 
1907409222, 
1907409276, 
1907409377, 
1907409435, 
1907409624, 
1907409650, 
1907409686
]
}