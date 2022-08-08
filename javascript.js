//variables globales para ataques y vidas
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
//funciones ataques
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'AGUA'
    
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    
    ataqueAleatorioEnemigo()
}
//funcion aleatorio ataque enemigo
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
}
//funcion de combate
function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo') 

    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("empate!")
    } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("ganaste!")
        //-- resta 1
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
        
    } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("ganaste!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    
    } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("ganaste!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    
    } else {
        crearMensaje("perdiste!")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
        
    }
    //revisar vidas
    revisarvidas()
}
//funcion vidas
function revisarvidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal('😁 FELICITACIONES!! GANASTE!!')
        
    }else if(vidasJugador == 0){
        crearMensajeFinal('😔 PERDISTE')
    }
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    //crear elemento html
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo)

}
//funcion mensajes
function crearMensaje(resultado){
    let sectionMensajes = document.getElementById('mensajes')
    //crear elemento html
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'tu mascota ataco con ' + ataqueJugador +' y la masctota del enemigo ataco con '+ ataqueEnemigo + ' '+ resultado
    //colocarlo al html
    sectionMensajes.appendChild(parrafo)

}

//funcion seleccion mascota
function seleccionMasctotaJugador() {
    let inputHipoge = document.getElementById('hipoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    //funcion innerhtml para remplazar el span en html jugador
    if (inputHipoge.checked) {
        spanMascotaJugador.innerHTML = 'hipoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'ratigueya'
    } else {
        alert('selecciona una mascota')
    }

    seleccionMasctotaEnemigo()
}
//funcion innerhtml para remplazar el span en html seleccion mascota Enemigo (pc)
function seleccionMasctotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'hipoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'ratigueya'
    }
}
//funcion reiniciar juego
function reiniciarJuego(){
    //recarga locacion
    location.reload()
}

// funcion para numeros aleatorios entre un num min y num max
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//evento click para botones
let botonMasctotaJugador = document.getElementById('boton-mascota')
botonMasctotaJugador.addEventListener('click', seleccionMasctotaJugador)

//EVENTO CLICK BOTONES
let botonFuego = document.getElementById('boton-fuego')
botonFuego.addEventListener('click', ataqueFuego)
let botonAgua = document.getElementById('boton-agua')
botonAgua.addEventListener('click', ataqueAgua)
let botonTierra = document.getElementById('boton-tierra')
botonTierra.addEventListener('click', ataqueTierra)

let botonReiniciar = document.getElementById('boton-reiniciar')
botonReiniciar.addEventListener('click',reiniciarJuego)
