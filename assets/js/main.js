// 1. Tiempos aleatorios
const tiempoCafe = (Math.random() * (3 - 1) + 1).toFixed(2) * 1000
const tiempoPan = (Math.random() * (4 - 2) + 2).toFixed(2) * 1000
const tiempoJugo = (Math.random() * (2 - 1) + 1).toFixed(2) * 1000

// 2. Funciones que devuelven promesas
const prepararCafe = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2
            if (exito) {
                console.log(`El café está listo en ${tiempoCafe / 1000} segundos`)
                resolve("Café")
            } else {
                reject("Se acabó el café")
            }
        }, tiempoCafe)
    })
}

const tostarPan = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2
            if (exito) {
                console.log(`Pan tostado listo en ${tiempoPan / 1000} segundos`)
                resolve("Pan")
            } else {
                reject("Se acabó el pan")
            }
        }, tiempoPan)
    })
}

const exprimirJugo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = Math.random() > 0.2
            if (exito) {
                console.log(`Jugo listo en ${tiempoJugo / 1000} segundos`)
                resolve("Jugo")
            } else {
                reject("No queda fruta para el jugo")
            }
        }, tiempoJugo)
    })
}

let pedidoListo = []

// 3. Realizar pedido con seguimiento de éxito
const realizarPedido = () => {
    console.log("Realizando pedido...")


    

    prepararCafe()
        .then((resultado) => {
            pedidoListo.push(resultado)
        })
        .catch((error) => {
            console.log(`Error con el café: ${error}`)
        })
        .then(() => {
            return tostarPan()
                .then((resultado) => {
                    pedidoListo.push(resultado)
                })
                .catch((error) => {
                    console.log(`Error con el pan: ${error}`)
                })
        })
        .then(() => {
            return exprimirJugo()
                .then((resultado) => {
                    pedidoListo.push(resultado)
                })
                .catch((error) => {
                    console.log(`Error con el jugo: ${error}`)
                })
        })
        .then(() => {
            if (pedidoListo.length > 0) {
                console.log(`Pedido listo con: ${pedidoListo.join(", ")}`)
            } else {
                console.log("No se pudo preparar nada del pedido")
            }
        })
        .then(() => {
            resumenPedido()
        })
}

const realizarPedidoAsync = async () => {

    try {
        const cafe =  await prepararCafe()
        pedidoListo.push(cafe)
        console.log(`Pedido café async listo `)
    } catch (error) {
        console.log("No se pudo hacer el cafe", error)
    }

    try {
        const pan =  await tostarPan()
        pedidoListo.push(pan)
        console.log(`Pedido pan async listo `)
    } catch (error) {
        console.log("No se pudo hacer el pan", error)
    }

    try {
        const jugo =  await exprimirJugo()
        pedidoListo.push(jugo)
        console.log(`Pedido jugo async listo `)
    } catch (error) {
        console.log("No se pudo hacer el jugo", error)
    }
    resumenPedido()
}


const resumenPedido = () => {
    if (pedidoListo.length > 0) {
        console.log(`Pedido listo con: ${pedidoListo.join(", ")}`)
    } else {
        console.log("No se pudo preparar nada del pedido")
    }
}

realizarPedido()
realizarPedidoAsync()

