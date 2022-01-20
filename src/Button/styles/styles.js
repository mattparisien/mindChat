import styled from "styled-components";

export const StyledButton = styled.button`
	width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
	font-size: .874rem;
	
	text-transform: none;
	padding: 0.9rem 1.2rem;

	.SocialIcon {
		margin-right: 1em;
	}

	


	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}

	${({ spacing }) => {
		return spacing
			? `
			&:not(:last-of-type) {
				margin-bottom: ${spacing};
			}
			`
			: `&:not(:last-of-type) {
				margin-bottom: 1rem;
			}`;
	}}

	transition: 300ms ease;
	background-color: ${({fill, theme}) => fill && theme['colors'][fill]};
	border-radius: 5px;
	border: 0px;
	color: ${({ outline }) => (outline ? "black" : "white")};
	outline: none;
	display: ${({ display }) => (display ? display : "block")};
	${({ display }) => {
		return (
			display === "flex" &&
			`
			align-items: center;
			justify-content: center;
			`
		);
	}}


	${({ naked }) => {
		return naked
			? `
			
			background: transparent;
			color: black;
			display: inline;
			padding: 0;

			&:hover {
				opacity: 0.7;
			}
			`
			: "";
	}}
`;
