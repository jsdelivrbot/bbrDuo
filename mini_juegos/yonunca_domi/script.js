
document.addEventListener("onload", Start());
document.getElementById("next").addEventListener("click", Start);

var FrasesUsadas= [];



function arrContains(arr, item) {
    var l;

    for (l = 0; l < arr.length; l++) {
        if (arr[l] === item) {
            return true;
        }
    }
    return false;
}

function Start(){
    var i= Math.floor(Math.random()*10);

    
    

    switch(i){
        case 0:
            i="Yo nunca he querido liarme con alguno del grupo";
            break;
        case 1:
            i="Yo nunca he tenido sexo en un lugar público";
            break;
        case 2:
            i="Yo nunca he grabado un vídeo porno";
            break;
        case 3:
            i="Yo nunca he hecho sexo oral";
            break;
        case 4:
            i="Yo nunca me he cagado en los pantalones";
            break;
        case 5:
            i="Yo nunca he comido piña";
            break;
        case 6:
            i="Yo nunca he fingido un orgasmo";
            break;
        case 7:
            i="Yo nunca he muerto";
            break;
        case 8:
            i="Yo nunca he saltado en paracaídas";
            break;
        case 9:
            i="Yo nunca he manchado un sofá";
            break;
        case 10:
            i="Yo nunca he usado un spray pimienta";
            break;
    }
    
    document.getElementById("uno").innerHTML= i;
}
