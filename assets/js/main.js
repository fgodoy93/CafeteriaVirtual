//1. Crear funciones que devuelven promesas.

const tiempoCafe = (Math.random()*(3-1)+1)*1000
const tiempoPan = (Math.random()*(4-2)+2)*1000
const tiempoJugo = (Math.random()*(2-1)+1)*1000

const prepararCafe = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.2
        if(exito){
            console.log("El café está listo")
        }else{
            reject("Se acabó el café")
        }}, tiempoCafe)
    })
}

const tostarPan = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.2
        if(exito){
            console.log("Pan tostado listo")
        }else{
            reject("Se acabó el pan")
        }}, tiempoPan)
    })
}

const exprimirJugo = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.2
        if(exito){
            console.log("Jugo listo")
        }else{
            reject("No queda fruta para el jugo")
        }}, tiempoPan)
    })
}

prepararCafe()
tostarPan()
exprimirJugo()

//2. Realizar el pedido

