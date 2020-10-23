const getInputFile = require("./checkInput");
const calculateTeamPoints = require("./calculateTeamPoints");

//to read, and catch invalid input
const file = getInputFile(process.argv);

//separate by lines
var inputLines = file.split('\r\n');

//to calculate points
let [teamMap, allTeams] = calculateTeamPoints(inputLines)

allTeams = mergeSort(allTeams);
printResult();

//sorting 
function mergeSort(array) {
    if (array.length === 1) {
        return array;
    }

    const length = array.length;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}
//merging, used in mergeSort function
function merge(left, right) {
    var result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    //to make sure we have items in the array
    while (left && leftIndex < left.length && right && rightIndex < right.length) {
        if (teamMap[left[leftIndex]].totalPoints >
            teamMap[right[rightIndex]].totalPoints) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }
    return result;
}

//printing the final outPut
function printResult() {
    console.log('Here is the result of winners of the league sorted by points:');

    for (var i = 0; i < allTeams.length; i++) {
        console.log('"' + teamMap[allTeams[i]].name + '"' + ' scored ' + teamMap[allTeams[i]].totalPoints + ' points');
    }
}

module.exports = mergeSort;