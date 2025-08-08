//1. Crear funciones que devuelven promesas.

const tiempoCafe = (Math.random()*(3-1)+1).toFixed(2)*1000
const tiempoPan = (Math.random()*(4-2)+2).toFixed(2)*1000
const tiempoJugo = (Math.random()*(2-1)+1).toFixed(2)*1000

const prepararCafe = () => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const exito = Math.random() > 0.2
        if(exito){
            console.log(`El café está listo`, `en ${tiempoCafe/1000} segundos`)
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
            console.log(`Pan tostado listo en ${tiempoPan/1000} segundos`)
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
            console.log(`Jugo listo en ${tiempoJugo/1000} segundos`)
            }else{
            reject("No queda fruta para el jugo")
        }}, tiempoJugo)
    })
}

// prepararCafe()
// tostarPan()
// exprimirJugo()

//2. Realizar el pedido
// const realizarPedido = () => {
//     console.log("Realizando pedido...")
//     Promise.all([prepararCafe(), tostarPan(), exprimirJugo()])
//     .then( () => {
//         console.log("Pedido listo, buen provecho")
//     })
//     .catch( (error) => {
//         console.log(`No se pudo completar el pedido: ${error}`)
//     })
// }

// const realizarPedido = () => {
//     console.log("Realizando pedido...")

//     prepararCafe()
//     .then( () => {
//         console.log("Café preparado")
//         // tostarPan()
//     })
//     .catch( (error) => {
//         console.log(`No se pudo preparar el café: ${error}`)
//         return tostarPan() // Si falla el café, intentamos tostar el pan
//     }) //hasta aca funciona
//     .then( () => tostarPan() )
//         .then( () => {
//             console.log("Pan preparado")
//             // exprimirJugo()
//         })
    
//     .catch( (error) => {
//         console.log(`No se pudo preparar el pan: ${error}`)
//     }) //hasta aca funciona
//     .then( () => {
//         console.log("Jugo exprimido")
//     })
//     .catch( (error) => {
//         console.log(`No se pudo preparar el jugo: ${error}`)
//     })
//     .then( () => {
//         console.log("Pedido listo, buen provecho")
//     })
// }
realizarPedido()