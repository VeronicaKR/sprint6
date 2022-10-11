import React from 'react'
import { Escena } from './components/escena/Escena.jsx'
import { history } from './history/history.js'




export const App = () => {
  return (
   <>
    <Escena history={history[0]} />
    <Escena history={history[1]} />
    <Escena history={history[2]} />
    <Escena history={history[3]} />

    </> 
  )
}

