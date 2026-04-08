import React from 'react'
import { useState } from 'react'

const HookContador = () => {

    const [contador, setContador] = useState(1)

    function incrementarContador() {
        setContador(contador + 1)
    }

    function decrementarContador() {
        setContador(contador - 1)
    }

  return (
    <div>
        <h1>O contador está em: {contador}</h1>
        <button onClick={incrementarContador}>Incrementar contador</button>
        <button onClick={decrementarContador}>Decrementar contador</button>
    </div>
  )
}

export default HookContador