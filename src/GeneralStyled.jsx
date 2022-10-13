import styled from "styled-components";

export const ImgStyled= styled.div`
background-image: url(${({img}) => img ? img : null});
width: 960px;
height:640px;
background:contain;
background-repeat:no-repeat;

`