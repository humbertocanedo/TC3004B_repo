import React from 'react';
import { bancos } from '../../classes/bancos';

// TypeScript type definition for banco object
interface Banco {
  id: number;
  name: string;
  country: string;
}

const BancosIA: React.FC = () => {
  return (
    <div>
      <h2>Listado de Bancos (TypeScript)</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {bancos.map((banco: Banco) => (
          <li key={banco.id} style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h3 style={{ margin: '0 0 0.5rem 0' }}>{banco.name}</h3>
            <p style={{ margin: 0, color: '#666' }}>
              <strong>País:</strong> {banco.country}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BancosIA;
