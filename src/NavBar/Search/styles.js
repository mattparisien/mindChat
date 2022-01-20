import styled from "styled-components";
import { SEARCHBARPADDING } from "../styles/responsiveStyles";

export const StyledSearchResults = styled.div`
	position: absolute;
	height: auto;
	width: 100%;

	left: 0;
	top: 100%;
	padding-left: inherit;
	padding-right: inherit;

	ul {
		padding: 0px;
		margin: 0;
	}

	li {
		height: 5.5rem;
		width: 100%;
		list-style-type: none;
		border: 1px solid ${({ theme }) => theme.colors.lightGrey};
		padding: 1rem;

		a {
			display: block;
			width: 100%;
			height: 100%;
			text-underline: none;
			text-decoration: none;
			display: flex;
			align-items: center;
			justify-content: flex-start;
			font-size: 2rem;
		}
	}
`;

export const StyledSearchBar = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	position: absolute;
	top: 0;
	left: 0;
	z-index: 999;
	transition: 300ms ease;
	transform-origin: right;
	transform: ${({ isActive }) =>
		isActive ? "translateY(0)" : "translateY(-100%)"};

	.SearchBar__inner {
		height: 100%;
		position: relative;
		display: flex;
		padding: 1rem 8rem;

		.SearchBar__close {
			height: 100%;

			button {
				height: 100%;
			}

			.CloseIcon {
				width: 100%;
				height: 100%;
			}
		}

		.SearchBar__input {
			background: transparent;
			border: 0px;
			padding: 1rem;
			font-size: 2rem;
			width: 100%;
			height: 100%;

			&:focus {
				outline: none;
			}
		}
	}
`;
