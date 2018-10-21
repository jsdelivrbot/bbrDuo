
let NumdeFrase=0;

document.addEventListener("onload", Start());
document.getElementById("next").addEventListener("click", Start);

function Start(){
    
    let i= Math.floor(Math.random()*3);
    switch(i){
        case 0:
            i="frase cero";
            break;
        case 1:
            i="primera frase";
            break;
        case 2:
            i="segunda frase";
            break;
        case 3:
            i="tercera frase";
            break;
        default: 
            i=i;
            break;
    }
    
    document.getElementById("uno").innerHTML= i;
}
