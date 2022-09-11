const elementA = document.getElementById("inputA");
const elementB = document.getElementById("inputB");
var totalTeamA = 0;
var totalTeamB = 0;

function toSum() {
  addLine(elementA.value, elementB.value);
  updateTotals(elementA.value, elementB.value);
}

function updateTotals(teamAPoints, teamBPoints) {
  totalTeamA += parseInt(teamAPoints);
  totalTeamB = totalTeamB + parseInt(teamBPoints);
  document.getElementById("totalA").innerHTML = "Total: " + totalTeamA;
  document.getElementById("totalB").innerHTML = "Total: " + totalTeamB;
}

function addLine(teamAPoints, teamBPoints) {
  var results = document.getElementById("results");
  results.insertAdjacentHTML(
    "beforeEnd",
    "<tr><td>" + teamAPoints + "</td><td>" + teamBPoints + "</td></tr>"
  );
}