import React from 'react';

export const Welcome = (props) => {
 
  return (
    <>
    <h1>WELCOME</h1>
    <p>THIS IS MY FIRST WEB</p>
 
    <button onClick={()=> props.setCondicion(false)}>START</button>
   
    </>
  )
}
