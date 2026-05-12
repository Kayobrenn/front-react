import React from 'react'
import EstouConseguindoAprenderReact from './components/EstouConseguindoAprenderReact'
import Aluno from './components/Aluno'

const App = () => {
  return (
    <div>
      <EstouConseguindoAprenderReact estouConseguindo={true}/>
      <EstouConseguindoAprenderReact estouConseguindo={false}/>

      {
        [
          {nome: "Kayo Brenno,", email: "kayo@uniesp.edu.br", curso: "Ciência da Computação"},
          {nome: "Geovane Júnior,", email: "geovane@uniesp.edu.br", curso: "Ciência da Computação"},
          {nome: "Anne Isabely,", email: "anne@uniesp.edu.br", curso: "Ciência da Computação"}
        ].map((aluno) => 
          <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} />
        )
      }
    </div>
  )
}

export default App