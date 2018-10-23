var playerList = ["Yasmany", "Dominic", "Walter", "Andy", "Laura", "Cristina", "Sandra"];
var phrases = [];
var usedPhrases = [];

function arrContains(arr, item) {
    var i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
}
function initializeGame() {
    yasgo.load(yasgo.cdn.jquery);
    yasgo.get("/recursos/frases_interacciones.json").then(function (interacciones) {
        yasgo.get("/recursos/frases_pensamientos.json").then(function (pensamientos) {
            phrases = JSON.parse(interacciones).frases;
            phrases = phrases.concat(JSON.parse(pensamientos).frases);
        });
    });
}

function btnClickNextPhrase() {
    var phrase = generateRandomPhrase();
    usedPhrases.push(phrase);
    $(".textDisplay").html(phrase);
}

function generateRandomPhrase() {
    var phraseToReturn = "";

    var randomPhrase = phrases[yasgo.utils.number.int(0, phrases.length - 1)].contenido;
    var randomPlayer = ["alguien del grupo"].concat(playerList)[yasgo.utils.number.int(0, playerList.length)];

    phraseToReturn = randomPhrase.replace("[list.players]", randomPlayer);
    phraseToReturn = randomPhrase.replace("[list.players]", randomPlayer);

    if (arrContains(usedPhrases, phraseToReturn)) {
        phraseToReturn = generateRandomPhrase();
    }

    return phraseToReturn;
}


function prueba() {
    var num = 0;
    for (var i = 0; i < 50000; i++) {
        try {
            num++;
            var phrase = generateRandomPhrase();
            usedPhrases.push(phrase);
            $(".textDisplay").html(phrase);
        } catch (ex) {
            break;
        }

    }

    console.log(num);
}