const turOn = document.getElementById( 'turnOn' )
const turnOff = document.getElementById( 'turnOff' )
const lamp = document.getElementById( 'lamp' )

function isLampBroken() { // Eu sei que a lâmpada tá quebrada quando o src estiver setado para 'lamp-broken'

    return lamp.src.indexOf( 'broken' ) > -1 // O indexOf serve para procurar caracteres dentro de uma string, ou seja, nesse caso ele irá procurar se a lâmpada broken contém no lamp.src, se sim, ele retorna um número maior que -1, se não, ele retorna -1. Então, nesse caso, a função irá retornar verdadeiro apenas quando a lâmpada estiver quebrada.

}

const statusColor = document.querySelector( 'body' )

function lampOn() {
    if( !isLampBroken() ) {
        lamp.src = './src/lamp_on.png'
        statusColor.setAttribute(  'class' ,'dark' )
    }
}

function lampOff() {
    if( !isLampBroken() ) {
    lamp.src = './src/lamp_off.png'
    statusColor.setAttribute(  'class' ,'light' )
    }
}

function lampBroken() {
    lamp.src = './src/lamp_broken.png'
}

turOn.addEventListener( 'click', lampOn )
turnOff.addEventListener( 'click', lampOff )
lamp.addEventListener( 'mouseover', lampOn)
lamp.addEventListener( 'mouseleave', lampOff)
lamp.addEventListener( 'dblclick', lampBroken )