var playerList = ["Yasmany", "Dominic", "Walter", "Andy", "Laura", "Cristina", "Sandra"];
var phrases = [];
var usedPhrases = [];

function initializeGame() {
    yasgo.get("/recursos/frases_interacciones.json").then(function (interacciones) {
        yasgo.get("/recursos/frases_pensamientos.json").then(function (pensamientos) {
            phrases = JSON.parse(interacciones);
            phrases = phrases.concat(JSON.parse(pensamientos));
        });
    });
}


function arrayContains(arrayWithData, dataToCheck) {
    var hasIt = false;

    for (var i = 0; i < arrayWithData.length; i++) {
        if (arrayWithData[i] === dataToCheck) {
            hasIt = true;
            return hasIt;
        }
    }

    return hasIt;
}