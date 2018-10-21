
let NumdeFrase=0;

document.addEventListener("onload", Start());
document.getElementById("next").addEventListener("click", Start);

function Start(){
    
    let i= Math.floor(Math.random()*3);
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
            i="Yo nunca ";
            break;
        case 5:
            i="primera frase";
            break;
        case 6:
            i="segunda frase";
            break;
        case 7:
            i="tercera frase";
            break;
    }
    
    document.getElementById("uno").innerHTML= i;
}
