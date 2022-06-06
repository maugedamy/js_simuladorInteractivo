debugger

let nombre = prompt("Ingresá tu nombre");

let Pedido = parseInt(prompt("Ingresá el monto en pesos a recibir"));

let cantidadCuotas = parseInt(prompt("Ingresá el número de cuotas. Mínimo 1 y máximo 12"));

let interes = 1.5;

let montoTotal = 0;

let montoCuota = 0;

switch (cantidadCuotas) {
    case 1:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 1 cuota de $" + montoCuota);
        break;
    case 2:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 2 cuotas de $" + montoCuota);
        break;
    case 3:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 3 cuotas de $" + montoCuota);
        break;
    case 4:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 4 cuota de $" + montoCuota);
        break;
    case 5:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 5 cuotas de $" + montoCuota);
        break;
    case 6:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 6 cuotas de $" + montoCuota);
        break;
    case 7:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 7 cuotas de $" + montoCuota);
        break;
    case 8:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 8 cuotas de $" + montoCuota);
        break;
    case 9:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 9 cuotas de $" + montoCuota);
        break;
    case 10:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 10 cuotas de $" + montoCuota);
        break;
    case 11:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 11 cuotas de $" + montoCuota);
        break;
    case 12:
        montoTotal = calculoMonto();
        montoCuota = calculoCuota();
        console.log(nombre + ", el monto total a abonar es de $" + montoTotal + " en 12 cuotas de $" + montoCuota);
        break;
    default:
        alert("Número de cuotas incorrecto. Intentá nuvamente o escribí 0 para salir.")
}


function calculoMonto() {
    return Pedido * cantidadCuotas * interes;
}

function calculoCuota() {
    return (Pedido * cantidadCuotas * interes) / cantidadCuotas;
}


