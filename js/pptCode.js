//PPT Code

//Generar num aleatorio.
//floor redondea num y devuelve un entero.
function aleatorio(minimo, maximo){
    var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

//Comenzar a jugar!
function jugar(opcionesId)
{
    //Generar un array.
    var opciones = ["Piedra","Papel","Tijera"];
    
    //Obtener opcion usuario en num.
    var opcionUsuario = opcionesId;
    //Obtener opcion usuario en texto.
    var jugadaUsuario = opciones[opcionUsuario];
    //Obtener opcion maquina en num.
    var opcionMaquina = aleatorio(0,2);
    //Obtener opcion maquina en texto.
    var jugadaMaquina = opciones[opcionMaquina];
    
    //Declarar variable resultado.
    var resultado;
    
    //Obtener jugada e insertar texto en div Id jugada.
    var jugada = document.getElementById("jugada").innerHTML="Tu juegas <strong>" + jugadaUsuario + "</strong> contra <strong>" + jugadaMaquina + "</strong>.";
    
    //Ejecutar jugada y obtener resultado.
    //Comprobar si hay empate.
    if(opcionUsuario == opcionMaquina)
    {
        //Declarar resultado.
        resultado = "Empate";
        //Mostrar resultado en div Id resultado.
        document.getElementById("resultado").innerHTML=resultado;
        //Mostrar jugada.
        return jugada;
    }
    //Comprobar si el usuario pierde.
    else if(opcionUsuario == 0 && opcionMaquina == 1 || opcionUsuario == 1 && opcionMaquina == 2 || opcionUsuario == 2 && opcionMaquina == 0)
    {
        //Declarar resultado.
        resultado = "Perdiste";
        //Mostrar resultado en div Id resultado.
        document.getElementById("resultado").innerHTML=resultado;
        //Mostrar jugada.
        return jugada;
    }
    //Comprobar si el usuario gana.
    else
    {
        //Declarar resultado.
        resultado = "Ganaste";
        //Mostrar resultado en div Id resultado.
        document.getElementById("resultado").innerHTML=resultado;
        //Mostrar jugada.
        return jugada;
    }
}
