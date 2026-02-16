

// Funcionan Igual, pero tienen una sintaxis diferente, 
// las funciones flecha no tienen su propio this, arguments, super o new.target,
// y no pueden ser utilizadas como constructores. 
// Las funciones normales pueden ser utilizadas como constructores y 
// tienen su propio this, arguments, super y new.target.

// Funciones normales
function saludar(nombre:string):string{
    return `Hola ${nombre}`;

}
// Funciones flecha
const saludarFlecha = (nombre:string):string => {
    return `Hola ${nombre}`;
}

const msg = saludar('Humbe');
const msg2 = saludarFlecha('Humbe');
console.log(msg);
console.log(msg2);