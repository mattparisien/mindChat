import React from "react";
import { StyledForm } from "./styles/styles";

function Form(props) {
	return <StyledForm {...props} className="Form">{props.children}</StyledForm>;
}

export default Form;
