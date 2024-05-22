function calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    let precioBase = 0;

    switch (tipoHamburguesa) {
        case 'Carne a la parrilla':
            precioBase = 1800;
            break;
        case 'Pollo':
            precioBase = 1500;
            break;
        case 'Vegetariana':
            precioBase = 1200;
            break;
        default:
            console.log('Tipo de hamburguesa no válido');
            return;
    }

    let total = precioBase + (jamon ? 30 : 0) + (queso ? 25 : 0) + (salsaTomate ? 5 : 0) + (mayonesa ? 5 : 0) + (mostaza ? 5 : 0) + (tomate ? 15 : 0) + (lechuga ? 10 : 0) + (cebolla ? 10 : 0);

    return total;
}

function mostrarMensaje(nombre, apellido, tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla) {
    const total = calcularTotalHamburguesa(tipoHamburguesa, jamon, queso, salsaTomate, mayonesa, mostaza, tomate, lechuga, cebolla);
    console.log(`Estimado ${nombre} ${apellido}, el monto total a pagar es de: $${total}`);
}

mostrarMensaje('Daniel', 'Fuentes', 'Carne a la parrilla', true, true, false, false, false, true, false, true);