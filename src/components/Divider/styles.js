import styled from "styled-components";

export const StyledDivider = styled.div`
  width: ${({direction}) => direction === 'vertical' ? '1px' : '100%'};
  height: ${({direction}) => direction === 'vertical' ? '100%' : '1px'};
  background-color: ${({theme}) => theme.colors.lightGrey};
`