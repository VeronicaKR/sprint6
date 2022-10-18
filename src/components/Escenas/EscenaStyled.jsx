import styled from "styled-components";


export const EscenaStyled = styled.div `
border: 1px solid;
text-align: center;
margin:11px;
border-radius:25px;
padding:10px;
background-color: ${({isTrue}) => isTrue ? 'pink' : 'white'};
opacity:0.6;
`
