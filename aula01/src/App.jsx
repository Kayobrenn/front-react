import React from 'react'
import Saudacao from './components/Saudacao'
import Adicao from './components/Adicao'
import Subtracao from './components/Subtracao'
import Multiplicacao from './components/Multiplicacao'
import Divisao from './components/Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

const App = () => {
  return (
    <div>
      <Saudacao nome="Kayo Brenno" idade={20}/>
      <Adicao num1={2} num2={3}/>
      <Subtracao num1={2} num2={3}/>
      <Multiplicacao num1={2} num2={3}/>
      <Divisao num1={3} num2={3}/>
      <PrecisoEstudar nomeDaTecnologia="React"/>
    </div>
  )
}

export default App