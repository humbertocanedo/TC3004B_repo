import React from 'react';

const Variables = () => {
  const nombre = "Humbe";
  const universidad = "Tecnológico de Monterrey";
  const semestre = 6;
  const materias = ["Desarrollo Web", "Algoritmos", "Base de Datos"];
  
  return (
    <div>
      <h2>Componente con Variables</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Universidad:</strong> {universidad}</p>
      <p><strong>Semestre:</strong> {semestre}</p>
      <h3>Materias:</h3>
      <ul>
        {materias.map((materia, index) => (
          <li key={index}>{materia}</li>
        ))}
      </ul>
    </div>
  );
}

export default Variables;