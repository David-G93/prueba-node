// Crear una función para calcular el monto a pagar por el alquiler de un vehículo
function calcularMontoAlquiler(tipoVehiculo, diasAlquiler, sillaBebe) {
    let montoPorDia = 0;
    if (tipoVehiculo === "Compacto") {
        montoPorDia = 14000;
    } else if (tipoVehiculo === "Mediano") {
        montoPorDia = 17000;
    } else if (tipoVehiculo === "Camioneta") {
        montoPorDia = 28000;
    } else {
        console.log("Tipo de vehículo no válido");
        return;
    }

    let montoTotal = montoPorDia * diasAlquiler;
    if (sillaBebe) {
        montoTotal += 1200 * diasAlquiler;
    }
    
    let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoVehiculo} alquilado, considerando los ${diasAlquiler} días utilizados, el monto total a pagar es de $${montoTotal}`;
    if (sillaBebe) {
        mensaje += " con silla para bebé incluida.";
    } else {
        mensaje += " sin silla para bebé.";
    }
    
    return mensaje;
}

// Ejecutar la función con diferentes valores y mostrar el mensaje al cliente
console.log(calcularMontoAlquiler("Mediano", 2, true)); // Ejemplo de uso con un compacto por 3 días con silla para bebé
