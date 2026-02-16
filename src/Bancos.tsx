// src/Bancos.tsx
import React from 'react';
import { bancos } from './classes/bancos';

const Bancos = () => {
  return (
    <div>
      <h2>Listado de Bancos</h2>
      {bancos.map((banco) => (
        <div key={banco.id}>
          <h3>{banco.name}</h3>
          <p>País: {banco.country}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Bancos;