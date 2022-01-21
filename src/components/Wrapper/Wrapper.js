import React from 'react'
import { StyledWrapper } from './styles/styles'

function Wrapper(props) {
  return (
    <StyledWrapper className="StyledWrapper" {...props} className={props.className}>
      {props.children}
    </StyledWrapper>
  )
}

export default Wrapper
