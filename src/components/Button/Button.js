import React from "react";
import { StyledButton } from "./styles/styles";
import classNames from "classnames";
import { Button } from "@mui/material";

function SiteButton(props) {
	return (
		<StyledButton {...props} className={"Button"}>
			{props.children}
		</StyledButton>
	);
}

export default SiteButton;
