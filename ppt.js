var menu= "MENÚ\n";
var op;




var player1;
var opcion1;

var player2;
var opcion2;

var resultado;
menu+="PIEDRA, PAPEL & TIJERA\n\n";
menu+="1. JUGAR\n";
menu+="2. SALIR\n";
menu+="Escoja una opción\n\n";



do{
    
op=parseInt(prompt(menu));


    switch(op){
        case 1: 
            function random1(min, max) {
return Math.random()*(max-min)+min;
    
}

player1=Math.floor(random1(1,4));

if (player1 == 1){
    opcion1="PIEDRA";
}

if (player1 == 2){
    opcion1="PAPEL";
}

if (player1 == 3){
    opcion1="TIJERA";
}

player2=Math.floor(random1(1,4));

if (player2 == 1){
    opcion2="PIEDRA";
}

if (player2 == 2){
    opcion2="PAPEL";
}

if (player2 == 3){
    opcion2="TIJERA";
}


console.log("Elección del Jugador 1= "+opcion1);
console.log("Elección del Jugador 2= "+opcion2);

if(opcion1=="PIEDRA" && opcion2=="PIEDRA"){
    resultado = "¡EMPATE!";
}

if(opcion1=="PIEDRA" && opcion2=="PAPEL"){
    resultado = "VENCEDOR = JUGADOR 2 // PERDEDOR = JUGADOR 1";
}

if(opcion1=="PIEDRA" && opcion2=="TIJERA"){
    resultado = "VENCEDOR = JUGADOR 1 // PERDEDOR = JUGADOR 2";
}

if(opcion1=="PAPEL" && opcion2=="PIEDRA"){
    resultado = "VENCEDOR = JUGADOR 1 // PERDEDOR = JUGADOR 2";
}

if(opcion1=="PAPEL" && opcion2=="PAPEL"){
    resultado = "¡EMPATE!";
}

if(opcion1=="PAPEL" && opcion2=="TIJERA"){
    resultado = "VENCEDOR = JUGADOR 2 // PERDEDOR = JUGADOR 1";
}

if(opcion1=="TIJERA" && opcion2=="PIEDRA"){
    resultado = "VENCEDOR = JUGADOR 2 // PERDEDOR = JUGADOR 1";
}

if(opcion1=="TIJERA" && opcion2=="PAPEL"){
    resultado = "VENCEDOR = JUGADOR 1 // PERDEDOR = JUGADOR 2";
}

if(opcion1=="TIJERA" && opcion2=="TIJERA"){
    resultado = "¡EMPATE!";
}

console.log(resultado);
            break;

        case 2:
            console.log("Hasta la próxima");
            break;
            
        default:
            console.log("Elija una opción válida");
            break;
            
        
    }

    
}while(op!=2);