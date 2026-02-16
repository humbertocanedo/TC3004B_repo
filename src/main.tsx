import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './classes/strings.ts'
import './classes/arrays.ts'
import './classes/funciones.ts'
import './classes/objetos.ts'
import './classes/import.ts'

import Hello from './Hello'
import Variables from './Variables'
import Bancos from './Bancos'
import Personajes from './Personajes'  

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div style={{ padding: '20px' }}>
      <h1>Lab 1 - Componentes Funcionales React</h1>
      
      <hr />
      <section>
        <Hello />
      </section>
      
      <hr />
      <section>
        <Variables />
      </section>
      
      <hr />
      <section>
        <Bancos />
      </section>
      
      <hr />
      <section>
        <Personajes />  {/* 👈 Agregar esto */}
      </section>
    </div>
  </StrictMode>,
)