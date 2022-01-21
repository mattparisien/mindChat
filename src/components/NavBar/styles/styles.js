import styled from "styled-components";
import { RESPONSIVENAVPADDING } from "./responsiveStyles";
import { FLEXCENTER } from "../../styles/global";

const NAVBOXSHADOW = "box-shadow: 0px -7px 35px rgba(0, 0, 0, 0.25);";

export const StyledResponsiveNavBar = styled.header`
	height: 80px;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background-color: white;

	${RESPONSIVENAVPADDING};
	border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};

	.header-inner {
		width: 100%;
		height: 100%;
		position: relative;
		opacity: ${({ searchActive }) => (searchActive ? "0" : "1")};
		transition: 1s ease;
	}

	nav {
		width: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		align-items: center;
		justify-content: space-between;

		.nav--right {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 14rem;

			&__search {
				height: 100%;
				width: 30px;
				display: flex;
			}

			.Button {
				margin: 0;
			}
		}
	}
`;
