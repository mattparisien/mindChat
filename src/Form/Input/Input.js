import React from "react";
import { TextField } from "@material-ui/core";
import { StyledInput } from "../styles/styles";

function Input(props) {
	return (
		<StyledInput>
			<TextField {...props}>{props.children}</TextField>{" "}
		</StyledInput>
	);
}

export default Input;
