import React from 'react'

const Saudacao = (props) => {
  return (
    <div>
        <h1>Bem Vindo {props.nome}, sua idade é {props.idade}!</h1>
    </div>
  )
}

export default Saudacao