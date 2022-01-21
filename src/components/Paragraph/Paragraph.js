import React from 'react';
import { StyledParagraph } from './styles';

function Paragraph({children, textAlign, className }) {
  return (
    <StyledParagraph textAlign={textAlign} className={`Paragraph ${className}`}>
      {children}
    </StyledParagraph>
  );
}

export default Paragraph;
