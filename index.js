// code your solution here
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },]

function superbowlWin(teamRecords) {

    let bet = function (element) {
        return (element.result === "W")
    }

    let b = teamRecords.find(bet);
    return typeof b === "object" ? b.year : b;
}


console.log(superbowlWin(record));

