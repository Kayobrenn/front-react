import React from 'react'

const RenderizandoComFuncoes = () => {

  function escolhaDeEstado(siglaDoEstado) {
    if (siglaDoEstado == "PB") {
      return <h3>Estado Paraíba</h3>
    } else {
      return <h3>Outro Estado...</h3>
    }
  }

  return (
    <div>
      {escolhaDeEstado("PB")}
    </div>
  )
}

export default RenderizandoComFuncoes