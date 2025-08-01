alert("Bienvenido al juego del número secreto");

let numeroMaximoPosible = 100
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible) +1; 
let numeroUsuario = 0;
let intentos = 1;

let maxIntentos = 6; 

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
     numeroUsuario = parseInt (prompt (`Elige un número entre 1 y ${numeroMaximoPosible} por favor`));

    console.log(typeof  (numeroUsuario));


    if (numeroUsuario == numeroSecreto) {
        //acertamos
    alert (`acertaste, el numero secreto era ${numeroUsuario}. Tan solo te tomo ${intentos} ${intentos == 1? `vez` : `veces`}`); //operadores ternarios ? if : else
    } 
    // la condición no funcionó 
    else {
        if (numeroUsuario > numeroSecreto){
            alert(`El número es menor`);
        } else { 
            alert(`El número secreto es mayor`);
        }
       
    }
 
    intentos++; 
    
    if (intentos > maxIntentos) {
        alert (`Llegaste al número máximo de ${maxIntentos} intentos`);
        break;
    }
} 