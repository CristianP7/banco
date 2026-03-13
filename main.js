// consultar saldo
// depositar
// retirar

function miBanco(saldo) {

    
    function consultarSaldo() {
        console.log(`Su saldo actual es de: $${saldo}`);
    }

    consultarSaldo()

    function depositar(deposito) {
        saldo += deposito;
        console.log(`Hiciste un deposito de: $${deposito}`)
        console.log(`Tienes un saldo actual de: $${saldo}`)
    }

    depositar(50);

    function retirar(retiro) {

        if (retiro <= saldo){
        saldo -= retiro;
        console.log(`Hiciste un retiro de: $${retiro}`)
        console.log(`Tienes un saldo actual de: $${saldo}`)   

        } else {
        console.log("Lo siento, no tienes suficientes fondos para retirar")
        }


    }

    retirar(150);
}

miBanco(100);
