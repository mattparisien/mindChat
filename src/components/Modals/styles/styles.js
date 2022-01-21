import styled from "styled-components";
import { keyframes, css } from "styled-components";
import { BOXSHADOW } from "../../styles/global";

const ABSOLUTECENTER = `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledModal = styled.div`
	position: fixed;
	z-index: 9999;
	width: 100%;
	height: 100%;
	transition: visibility 300ms ease;
	display: ${({ isActive }) => (isActive ? "block" : "none")};

	.overlay {
		${ABSOLUTECENTER};
		background-color: black;
		opacity: 0.4;
		transition: 300ms ease;
	}

	.success-card {
		${ABSOLUTECENTER};
		width: 400px;
		height: 400px;
	}

	.modal-card-container {
		${ABSOLUTECENTER};
		${BOXSHADOW};
		height: 700px;
		width: 600px;
		background-color: white;
		z-index: 999;
		border-radius: 5px;

		> button {
			position: absolute;

			top: 0;
			right: 0;
		}

		.register-card {
			width: 100%;
			height: 100%;

			&--heading {
				width: 100%;
				margin-bottom: 6rem;
				display: block;
			}

			&--inner {
				width: 100%;
				height: 100%;
				position: relative;
			}
		}
	}
`;


