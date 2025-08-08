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
                console.log(`☕ El café está listo en ${tiempoCafe / 1000} segundos`)
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
                console.log(`🍞 Pan tostado listo en ${tiempoPan / 1000} segundos`)
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
                console.log(`🧃 Jugo listo en ${tiempoJugo / 1000} segundos`)
                resolve("Jugo")
            } else {
                reject("No queda fruta para el jugo")
            }
        }, tiempoJugo)
    })
}

// 3. Realizar pedido con seguimiento de éxito
const realizarPedido = () => {
    console.log("🛎️ Realizando pedido...")

    let pedidoListo = []

    prepararCafe()
        .then((resultado) => {
            pedidoListo.push(resultado)
        })
        .catch((error) => {
            console.log(`❌ Error con el café: ${error}`)
        })
        .then(() => {
            return tostarPan()
                .then((resultado) => {
                    pedidoListo.push(resultado)
                })
                .catch((error) => {
                    console.log(`❌ Error con el pan: ${error}`)
                })
        })
        .then(() => {
            return exprimirJugo()
                .then((resultado) => {
                    pedidoListo.push(resultado)
                })
                .catch((error) => {
                    console.log(`❌ Error con el jugo: ${error}`)
                })
        })
        .then(() => {
            if (pedidoListo.length > 0) {
                console.log(`✅ Pedido listo con: ${pedidoListo.join(", ")}`)
            } else {
                console.log("🚫 No se pudo preparar nada del pedido")
            }
        })
}

realizarPedido()