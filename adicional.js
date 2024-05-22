let convertirMayusculas = (texto) => {
  return typeof texto.toUpperCase();
};
console.log(convertirMayusculas("hola david"));

//------------

let tipoDeDato = (algo) => {
  return typeof algo;
};

console.log("El tipo de dato es: " + tipoDeDato(3));

//--------------

let edadPerro = (edad) => 7 * edad;

console.log("La edad del perro es: " + edadPerro(7));


//-------------

const calcularValorHoraTrabajo = (salarioMensual, diasTrabajados, horasDiarias, callback) => {
    const salarioDiario = salarioMensual / 30; // Se asume un mes de 30 días
    const valorHora = salarioDiario / horasDiarias;
  
    const valorTotalTrabajo = valorHora * diasTrabajados * horasDiarias;
  
    callback(valorTotalTrabajo);
  }
  
  // Callback para imprimir el resultado
  const imprimirResultado = (resultado) => {
    console.log(`El valor total del trabajo es: ${resultado}`);
  }
  
  // Ejemplo de uso
  calcularValorHoraTrabajo(2000, 20, 8, imprimirResultado);