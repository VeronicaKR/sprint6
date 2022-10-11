import React, { useState } from 'react';
import { ButtonStyled } from '../components/Button/ButtonStyled';
import { Escena } from '../components/Escena/Escena';
import { history } from '../history/history';


export const WebPage = () => {
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


