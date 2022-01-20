import styled from "styled-components";

const ABSOLUTECENTER = `
  position: absolute;
  top: 0;
  left: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const StyledWrapper = styled.div`
  display: ${(props) => props.display ? props.display : 'block'};
  flex-direction: ${(props) => props.flexDirection ? props.flexDirection : ''};
  justify-content: ${(props) => props.justifyContent ? props.justifyContent : ''};
  align-items: ${(props) => props.alignItems ? props.alignItems : ''};
  ${(props) => props.center && ABSOLUTECENTER};
`