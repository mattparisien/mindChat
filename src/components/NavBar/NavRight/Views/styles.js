import styled from "styled-components";

export const StyledAccountMenu = styled.div`
	.MuiPaper-root {
		display: block;
	}
`;

export const StyledSearch = styled.div`
	.nav--right__search {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		position: relative;


		.search-bar {
			width: ${({ isVisible }) => (isVisible ? "400px" : "0")};
			opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
			transition: 300ms ease;
		}
	}
`;
