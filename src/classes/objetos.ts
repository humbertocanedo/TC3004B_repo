



// aqui es normal hacer objetos con structs
const estudiante = {
    matricula: 'A01234567',
    nombre: 'Humbe',
    edad: 20,
    direccion: { 
        ciudad: 'Monterrey',
        cp: 64000
    }
}

console.table(estudiante);
console.log(estudiante);

const estudiante2= {...estudiante};
estudiante2.nombre = 'Juan';
console.log(estudiante2);