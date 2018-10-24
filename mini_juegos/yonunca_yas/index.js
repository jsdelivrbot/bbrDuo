/* global yasgo */
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
    yasgo.get("recursos/frases/interacciones.json").then(function(interacciones) {
        yasgo.get("recursos/frases/pensamientos.json").then(function(pensamientos) {
            yasgo.get("recursos/frases/situaciones.json").then(function(situaciones) {
                yasgo.get("recursos/frases/con_personas.json").then(function(conPersonas) {
                    yasgo.get("recursos/frases/bailes.json").then(function(bailes) {
                        phrases = JSON.parse(interacciones).frases;
                        phrases = phrases.concat(JSON.parse(pensamientos).frases);
                        phrases = phrases.concat(JSON.parse(situaciones).frases);
                        phrases = phrases.concat(JSON.parse(conPersonas).frases);
                        phrases = phrases.concat(JSON.parse(bailes).frases);
                        btnClickNextPhrase();
                    });
                });
            });
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

    phraseToReturn = randomPhrase.replace("[list.players]", "<span class='rndTxt'>" + randomPlayer + "</span>");
    phraseToReturn = randomPhrase.replace("[list.players]", "<span class='rndTxt'>" + randomPlayer + "</span>");

    if (arrContains(usedPhrases, phraseToReturn)) {
        phraseToReturn = generateRandomPhrase();
    }

    return phraseToReturn;
}


function prueba() {
    var num = 0;
    usedPhrases = [];
    $("#spanText").html("0");
    for (var i = 0; i < 50000; i++) {
        try {
            var phrase = generateRandomPhrase();
            usedPhrases.push(phrase);
            $(".textDisplay").html(phrase);
            num++;
        } catch (ex) {
            break;
        }

    }

    $("#spanText").html(num);
}
