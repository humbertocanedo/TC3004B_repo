import React from 'react';

const VariablesIA: React.FC = () => {
  const nombre: string = "Claude";
  const edad: number = 2;
  const universidad: string = "Tecnológico de Monterrey";

  return (
    <div>
      <h2>Componente de Variables con TypeScript</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Edad:</strong> {edad} años</p>
      <p><strong>Universidad:</strong> {universidad}</p>
    </div>
  );
};

export default VariablesIA;
