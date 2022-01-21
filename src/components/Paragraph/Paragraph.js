import React from 'react';
import { StyledParagraph } from './styles';

function Paragraph({children, textAlign }) {
  return (
    <StyledParagraph textAlign={textAlign}>
      {children}
    </StyledParagraph>
  );
}

export default Paragraph;
