import styled from "styled-components";

export const StyledParagraph = styled.p`
	text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
	word-wrap: break-word;
`;
