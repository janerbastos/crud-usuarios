import React from 'react'
import Main from '../templates/Main'

export default props =>
    <Main icon="home"
      title="Inicio."
      subtitle="Segundo projeto do captulo React.">
        <div className="display-4">Bem Vindo</div>
        <hr/>
        <p className="mb-0">
          Sistema para exemplificar a construção de um cadatro desenvolvido em React!
        </p>
    </Main>