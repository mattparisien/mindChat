import React from 'react'
import VectorLogo from './VectorLogo'
import { StyledLogo } from './styles/styles'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <StyledLogo className="Logo">
      <Link to="/">
      <VectorLogo/>
      </Link>
    </StyledLogo>
  )
}

export default Logo
