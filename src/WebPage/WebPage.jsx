import React, { useState } from 'react';
import { ButtonStyled } from '../components/Button/ButtonStyled';
import { Escena } from '../components/Escena/Escena';
import { ImgStyled } from '../GeneralStyled';
import { history } from '../history/history';


export const WebPage = () => {
    const [count, setCount] = useState(0);

  return (
    <ImgStyled img={history[count].img}>
    
<ButtonStyled onClick={()=> setCount(count-1)}>
ANTERIOR
</ButtonStyled>
<ButtonStyled onClick={()=> setCount(count+1)}>
SIGUIENTE
</ButtonStyled>

<Escena history={history[0].txt} isTrue={0===count} />
<Escena history={history[1].txt} isTrue={1===count} />
<Escena history={history[2].txt} isTrue={2===count} />
<Escena history={history[3].txt} isTrue={3===count} />
    
    
    </ImgStyled>
  )
}


