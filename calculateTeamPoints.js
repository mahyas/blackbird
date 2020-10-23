module.exports = function calculateTeamPoints(array){
    //using hash
    var allTeams = [];
    var teamMap = {};

    //validating the input
    for (var i = 0; i < array.length; i++) {
        if (!array) {
            break;
        }
    
        //separate input based on comma
        var line = array[i].toString()
        var teamInfos = line.split(",");
    
        //validating the input
        if (!teamInfos || teamInfos.length != 2) {
            break;
        }
    
        //separate input based on spaces
        var teamInfo1 = teamInfos[0].trim().split(' ');
        var teamInfo2 = teamInfos[1].trim().split(' ');
    
        //break if one or both of the teams don't have any points
        if (!teamInfo1 ||
            !teamInfo2 ||
            teamInfo1.length < 2 ||
            teamInfo2.length < 2) {
            break;
        }
        //assign values
        var teamName1 = '';
        for (var j = 0; j < teamInfo1.length - 1; j++) {
            teamName1 += teamInfo1[j] + ' ';
        }
        if (!teamMap[teamName1]) {
            teamMap[teamName1] = {
                name: '',
                goalScored: 0,
                goalReceived: 0,
                totalPoints: 0,
                gamePlayed: 0
            };
            allTeams.push(teamName1);
        }
        //assign values
        var teamName2 = '';
        for (var j = 0; j < teamInfo2.length - 1; j++) {
            teamName2 += teamInfo2[j] + ' ';
        }
        if (!teamMap[teamName2]) {
            teamMap[teamName2] = {
                name: '',
                goalScored: 0,
                goalReceived: 0,
                totalPoints: 0,
                gamePlayed: 0
            };
            allTeams.push(teamName2);
        }
        
        //team name, number of goals scored, number of goals received, and the number of games played (in case we need them in future while expanding the app)
        teamMap[teamName1].name = teamName1;
        teamMap[teamName1].goalScored += parseInt(teamInfo1[teamInfo1.length - 1]);
        teamMap[teamName1].goalReceived += parseInt(teamInfo2[teamInfo2.length - 1]);
        teamMap[teamName1].gamePlayed += 1;
    
    
        teamMap[teamName2].name = teamName2;
        teamMap[teamName2].goalScored += parseInt(teamInfo2[teamInfo2.length - 1]);
        teamMap[teamName2].goalReceived += parseInt(teamInfo1[teamInfo1.length - 1]);
        teamMap[teamName2].gamePlayed += 1;
    
        //assigning the points after each game
        if (teamInfo1[teamInfo1.length - 1] > teamInfo2[teamInfo2.length - 1]) {
            teamMap[teamName1].totalPoints += 3;
        } else if (teamInfo1[teamInfo1.length - 1] == teamInfo2[teamInfo2.length - 1]) {
            teamMap[teamName1].totalPoints += 1;
            teamMap[teamName2].totalPoints += 1;
        } else {
            teamMap[teamName2].totalPoints += 3;
        }
    }
    return [teamMap, allTeams]
}
