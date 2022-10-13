import React, { useState } from 'react'
import { Welcome } from './components/Welcome/Welcome.jsx';
import { WebPage } from './WebPage/WebPage.jsx';



export const App = () => {
 
  const [condicion, setCondicion] = useState(true);
  
  return (
  <>
{ condicion ? <Welcome setCondicion={setCondicion}/> : <WebPage />

}
  </> 
  )
}

