import { registerNavBar } from "./components/nav-bar.js";
import { registerMagicCentered } from "./components/magic-centered.js";
var playerList = ["Yasmany", "Dominic", "Walter", "Andy", "Laura", "Cristina", "Sandra"];
var phrases = [];
var usedPhrases = [];

async function main(params) {
    await yasgo.load(yasgo.cdn["jquery"]);
    await yasgo.load("https://rawgit.com/x-tag/core/master/dist/x-tag-polyfilled.min.js");
    yasgo.loadCss("https://use.fontawesome.com/releases/v5.4.1/css/all.css");
    yasgo.writeCss(`
    .rndTxt {
        color: #c8ef00;
        font-wheight: bold;
    }
    magic-centered {
        transition: all 0.3s;
    }
    `);
    registerNavBar();
    registerMagicCentered();

    var frasesInteracciones = await yasgo.get("./recursos/frases/interacciones.json");
    var frasesPensamientos = await yasgo.get("./recursos/frases/pensamientos.json");
    var frasesSituaciones = await yasgo.get("./recursos/frases/situaciones.json");
    var frasesConPersonas = await yasgo.get("./recursos/frases/con_personas.json");
    var frasesBailes = await yasgo.get("./recursos/frases/bailes.json");

    phrases = JSON.parse(frasesInteracciones).frases;
    phrases = phrases.concat(JSON.parse(frasesPensamientos).frases);
    phrases = phrases.concat(JSON.parse(frasesSituaciones).frases);
    phrases = phrases.concat(JSON.parse(frasesConPersonas).frases);
    phrases = phrases.concat(JSON.parse(frasesBailes).frases);

    $("#buttonNext").click(function (event) {
        btnClickNextPhrase();
    });
    btnClickNextPhrase();
}

function btnClickNextPhrase() {
    var phrase = generateRandomPhrase();
    usedPhrases.push(phrase);
    $("#textDisplay").html(phrase);
    $("#textDisplay")[0].parentElement.resize();
    var anim;

    $("#buttonNext").css("transform", "translateX(100%)");
    setTimeout(function () {
        $("#buttonNext").css("transform", "translateX(0)");
    }, 501);
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

function arrContains(arr, item) {
    var i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return true;
        }
    }
    return false;
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

yasgo(main);