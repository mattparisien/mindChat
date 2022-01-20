import styled from "styled-components";
import { FLEXCENTER } from "../../styles/global";

export const StyledInput = styled.div`
	width: 100%;

	.MuiFormControl-root,
	input {
		transition: 300ms ease;
		width: 100%;
	}

	.MuiFormHelperText-root {
		margin-left: 0px;
		font-weight: bolder;
	}

	* {
		margin: 0.2rem 0;
		transition: 300ms ease;
	}
`;

export const StyledForm = styled.form`
	${FLEXCENTER};
	width: 100%;

	.form-error-wrapper {
		width: 100%;
		p {
			text-align: left;
			color: red;
			font-weight: bolder;
			font-size: 0.8rem;
		}
	}
`;
