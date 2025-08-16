function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

let data = gameObject()

let playerName = 'Ben Gordon'
let teamName = "Charlotte Hornets"

function numPointsScored (playerName) {
for (key in data){
    if (data[key]['players'][playerName]){
        console.log(data[key]['players'][playerName]['points'])
    }
}
return data[key]['players'][playerName]['points']
}


function shoeSize (playerName) {
for (key in data){
    if (data[key]['players'][playerName]){
        console.log(data[key]['players'][playerName]['shoe'])
    }
}
return data[key]['players'][playerName]['shoe']
}

function teamColors (teamName) {
for (key in data){
    if (data[key]['teamName'] === teamName){
        console.log(data[key]['colors'])
    }
}
return data[key]['colors']
}

function teamNames() {
    teamNameArr = []
    for (key in data){
        teamNameArr.push(data[key]['teamName'])
    }
    console.log(teamNameArr)
    return teamNameArr
}


function playerNumbers(teamName) {
    playersNos = []
    for (key in data){
        if (data[key]['teamName'] === teamName){
                for (key2 in data[key]['players']) {
                    playersNos.push(data[key]['players'][key2]['number'])
                }
            }
        }
        console.log(playersNos)
        return playersNos
    }

function playerStats (playerName) {
for (key in data){
    if (data[key]['players'][playerName]){
        console.log(data[key]['players'][playerName])
    }
}
return data[key]['players'][playerName]
}

numPointsScored(playerName)
shoeSize(playerName)
teamColors(teamName)
teamNames()
playerNumbers("Brooklyn Nets")
playerStats(playerName)