import React, { useEffect, useState } from 'react';

interface Personaje {
  id: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

const Personajes = () => {
  const [personajes, setPersonajes] = useState<Personaje[]>([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => setPersonajes(data.results.slice(0, 6)))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h2>Personajes de Rick and Morty API</h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '20px' 
      }}>
        {personajes.map(personaje => (
          <div key={personaje.id} style={{
            border: '2px solid #00b5cc',
            borderRadius: '10px',
            padding: '10px',
            textAlign: 'center'
          }}>
            <img 
              src={personaje.image} 
              alt={personaje.name}
              style={{ 
                width: '100%', 
                borderRadius: '8px' 
              }}
            />
            <h3>{personaje.name}</h3>
            <p>{personaje.species} - {personaje.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personajes;