import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setcontador] = useState(1)
    
    function incrementarContador() {
      setcontador(contador+1)
    }

  return (
    <div>
        <h1>Contador com useState</h1>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <p>O contador está em: {contador}</p>
    </div>
  )
}

export default HookContador