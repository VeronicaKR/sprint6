import React, { useState } from 'react'
import { ButtonStyled } from './components/Button/ButtonStyled.jsx';
import { Escena } from './components/Escena/Escena.jsx'
import { history } from './history/history.js'


export const App = () => {

  const [count, setCount] = useState(0);

  return (
   <>
   
    <ButtonStyled onClick={()=> setCount(count-1)}>
        ANTERIOR
        </ButtonStyled>
    <ButtonStyled onClick={()=> setCount(count+1)}>
        SIGUIENTE
        </ButtonStyled>
     
    <Escena history={history[0]} isTrue={0===count} />
    <Escena history={history[1]} isTrue={1===count}/>
    <Escena history={history[2]} isTrue={2===count}/>
    <Escena history={history[3]} isTrue={3===count}/>

    </> 
  )
}

