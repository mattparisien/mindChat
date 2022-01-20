import styled from "styled-components";


export const StyledLink = styled.a`
  color: green;
  font-weight: ${({bold}) => bold ? 'bolder' : 'normal'};

`